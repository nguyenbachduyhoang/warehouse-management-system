"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, ArrowLeft, Plus, Trash2, Check, Warehouse, Box, Layers, Grid } from "lucide-react"

// Types based on the activity diagram structure
type WarehouseData = {
    name: string
    location: string
    totalArea: string
}

type ZoneData = {
    id: string
    name: string
    type: string // Cold, Dry, Secure, etc.
    temperature?: string
}

type AisleData = {
    id: string
    zoneId: string
    name: string // A1, A2, etc.
    racksPerSide: number
}

type RackData = {
    id: string
    aisleId: string
    levels: number
    binsPerLevel: number
    maxWeight: number
}

export default function WarehouseWizard({ onComplete }: { onComplete: () => void }) {
    const [step, setStep] = useState(1)

    // State for each step
    const [warehouse, setWarehouse] = useState<WarehouseData>({ name: "", location: "", totalArea: "" })
    const [zones, setZones] = useState<ZoneData[]>([])
    const [aisles, setAisles] = useState<AisleData[]>([])
    const [racks, setRacks] = useState<RackData[]>([])

    // Handlers
    const addZone = () => {
        setZones([...zones, { id: Math.random().toString(), name: `Zone ${String.fromCharCode(65 + zones.length)}`, type: "Standard" }])
    }

    const updateZone = (id: string, field: keyof ZoneData, value: string) => {
        setZones(zones.map(z => z.id === id ? { ...z, [field]: value } : z))
    }

    const removeZone = (id: string) => {
        setZones(zones.filter(z => z.id !== id))
    }

    const addAisle = (zoneId: string) => {
        const zoneAisles = aisles.filter(a => a.zoneId === zoneId)
        setAisles([...aisles, {
            id: Math.random().toString(),
            zoneId,
            name: `Aisle ${zoneAisles.length + 1}`,
            racksPerSide: 5
        }])
    }

    const updateAisle = (id: string, field: keyof AisleData, value: string | number) => {
        setAisles(aisles.map(a => a.id === id ? { ...a, [field]: value } : a))
    }

    const addRackConfig = (aisleId: string) => {
        // Check if config already exists
        if (racks.find(r => r.aisleId === aisleId)) return
        setRacks([...racks, {
            id: Math.random().toString(),
            aisleId,
            levels: 4,
            binsPerLevel: 3,
            maxWeight: 500
        }])
    }

    const updateRack = (aisleId: string, field: keyof RackData, value: number) => {
        setRacks(racks.map(r => r.aisleId === aisleId ? { ...r, [field]: value } : r))
    }

    // Navigation
    const nextStep = () => setStep(step + 1)
    const prevStep = () => setStep(step - 1)

    return (
        <div className="max-w-4xl mx-auto py-8">
            {/* Stepper */}
            <div className="flex items-center justify-between mb-8 px-4">
                {[
                    { n: 1, l: "Kho (Warehouse)", i: Warehouse },
                    { n: 2, l: "Khu vực (Zone)", i: Box },
                    { n: 3, l: "Lối đi (Aisle)", i: Grid },
                    { n: 4, l: "Kệ hàng (Rack)", i: Layers }
                ].map((s, idx) => (
                    <div key={s.n} className={`flex items-center gap-2 ${step >= s.n ? 'text-primary' : 'text-muted-foreground'}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= s.n ? 'border-primary bg-primary/10' : 'border-muted'}`}>
                            {step > s.n ? <Check className="w-4 h-4" /> : <s.i className="w-4 h-4" />}
                        </div>
                        <span className="font-medium hidden md:block">{s.l}</span>
                        {idx < 3 && <div className="w-12 h-[2px] bg-border mx-2 hidden md:block" />}
                    </div>
                ))}
            </div>

            <Card className="p-6 border-border bg-card min-h-[400px]">
                {/* Step 1: Warehouse Details */}
                {step === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-foreground">Thiết lập thông tin kho</h2>
                            <p className="text-muted-foreground">Nhập các thông tin cơ bản về nhà kho của bạn.</p>
                        </div>
                        <div className="grid gap-4 max-w-md mx-auto">
                            <div className="grid gap-2">
                                <Label>Tên kho (Warehouse Name)</Label>
                                <Input
                                    placeholder="VD: Kho Chính Tân Bình"
                                    value={warehouse.name}
                                    onChange={e => setWarehouse({ ...warehouse, name: e.target.value })}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label>Địa chỉ (Location)</Label>
                                <Input
                                    placeholder="VD: 123 Đường ABC, Tp.HCM"
                                    value={warehouse.location}
                                    onChange={e => setWarehouse({ ...warehouse, location: e.target.value })}
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label>Tổng diện tích (m²)</Label>
                                <Input
                                    type="number"
                                    placeholder="1000"
                                    value={warehouse.totalArea}
                                    onChange={e => setWarehouse({ ...warehouse, totalArea: e.target.value })}
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Step 2: Zone Definition */}
                {step === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-foreground">Phân chia khu vực (Zones)</h2>
                            <p className="text-muted-foreground">Tạo các khu vực chức năng trong kho.</p>
                        </div>

                        <div className="space-y-4">
                            {zones.map((zone, idx) => (
                                <div key={zone.id} className="flex gap-4 items-end bg-muted/30 p-4 rounded-lg border border-border">
                                    <div className="grid gap-2 flex-1">
                                        <Label>Tên Zone</Label>
                                        <Input
                                            value={zone.name}
                                            onChange={(e) => updateZone(zone.id, 'name', e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2 w-48">
                                        <Label>Loại</Label>
                                        <Select
                                            value={zone.type}
                                            onValueChange={(val) => updateZone(zone.id, 'type', val)}
                                        >
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Standard">Khô (Standard)</SelectItem>
                                                <SelectItem value="Cold">Lạnh (Cold)</SelectItem>
                                                <SelectItem value="Hazardous">Nguy hiểm</SelectItem>
                                                <SelectItem value="Receiving">Nhận hàng</SelectItem>
                                                <SelectItem value="Shipping">Xuất hàng</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <Button variant="ghost" size="icon" onClick={() => removeZone(zone.id)} className="text-destructive hover:bg-destructive/10">
                                        <Trash2 className="w-5 h-5" />
                                    </Button>
                                </div>
                            ))}

                            <Button variant="outline" onClick={addZone} className="w-full border-dashed">
                                <Plus className="w-4 h-4 mr-2" /> Thêm Zone mới
                            </Button>
                        </div>
                    </div>
                )}

                {/* Step 3: Aisle Configuration */}
                {step === 3 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-foreground">Cấu hình Lối đi (Aisles)</h2>
                            <p className="text-muted-foreground">Thiết lập số lượng lối đi cho từng khu vực.</p>
                        </div>

                        {zones.length === 0 && <p className="text-center text-red-500">Vui lòng quay lại và tạo ít nhất 1 Zone.</p>}

                        <div className="space-y-6">
                            {zones.map(zone => (
                                <div key={zone.id} className="border border-border rounded-lg p-4">
                                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                        <Box className="w-4 h-4 text-primary" /> {zone.name}
                                    </h3>

                                    <div className="space-y-3">
                                        {aisles.filter(a => a.zoneId === zone.id).map(aisle => (
                                            <div key={aisle.id} className="flex gap-4 items-center pl-4 border-l-2 border-muted">
                                                <Input
                                                    className="w-32"
                                                    value={aisle.name}
                                                    onChange={e => updateAisle(aisle.id, 'name', e.target.value)}
                                                />
                                                <span className="text-sm text-muted-foreground">Số kệ mỗi bên:</span>
                                                <Input
                                                    className="w-20"
                                                    type="number"
                                                    value={aisle.racksPerSide}
                                                    onChange={e => updateAisle(aisle.id, 'racksPerSide', parseInt(e.target.value))}
                                                />
                                            </div>
                                        ))}
                                        {aisles.filter(a => a.zoneId === zone.id).length === 0 && (
                                            <p className="text-sm text-muted-foreground italic pl-4">Chưa có lối đi nào.</p>
                                        )}
                                        <Button size="sm" variant="ghost text-primary" onClick={() => addAisle(zone.id)}>
                                            + Thêm lối đi
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 4: Rack & Bin Setup */}
                {step === 4 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-foreground">Chi tiết Kệ & Bin chứa</h2>
                            <p className="text-muted-foreground">Thiết lập cấu trúc lưu trữ chi tiết cho từng lối đi.</p>
                        </div>

                        <div className="space-y-6">
                            {aisles.map(aisle => {
                                const rack = racks.find(r => r.aisleId === aisle.id) || { levels: 4, binsPerLevel: 3, maxWeight: 500 };
                                const zone = zones.find(z => z.id === aisle.zoneId);

                                if (!racks.find(r => r.aisleId === aisle.id)) {
                                    addRackConfig(aisle.id);
                                }

                                return (
                                    <div key={aisle.id} className="border border-border rounded-lg p-4 bg-muted/10">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="font-bold flex items-center gap-2">
                                                <Grid className="w-4 h-4 text-primary" />
                                                {zone?.name} &gt; {aisle.name}
                                            </h3>
                                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                                                Tổng Bin ước tính: {aisle.racksPerSide * 2 * rack.levels * rack.binsPerLevel}
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="grid gap-1">
                                                <Label className="text-xs">Số tầng (Levels)</Label>
                                                <Input
                                                    type="number"
                                                    value={rack.levels}
                                                    onChange={e => updateRack(aisle.id, 'levels', parseInt(e.target.value))}
                                                />
                                            </div>
                                            <div className="grid gap-1">
                                                <Label className="text-xs">Số Bin mỗi tầng</Label>
                                                <Input
                                                    type="number"
                                                    value={rack.binsPerLevel}
                                                    onChange={e => updateRack(aisle.id, 'binsPerLevel', parseInt(e.target.value))}
                                                />
                                            </div>
                                            <div className="grid gap-1">
                                                <Label className="text-xs">Tải trọng tối đa tầng (kg)</Label>
                                                <Input
                                                    type="number"
                                                    value={rack.maxWeight}
                                                    onChange={e => updateRack(aisle.id, 'maxWeight', parseInt(e.target.value))}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )}
            </Card>

            {/* Actions */}
            <div className="flex justify-between mt-6 px-4">
                <Button variant="outline" onClick={prevStep} disabled={step === 1}>
                    <ArrowLeft className="w-4 h-4 mr-2" /> Quay lại
                </Button>

                {step < 4 ? (
                    <Button onClick={nextStep} className="bg-primary hover:bg-primary/90">
                        Tiếp tục <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                ) : (
                    <Button onClick={onComplete} className="bg-green-600 hover:bg-green-700 text-white">
                        Hoàn tất cấu hình <Check className="w-4 h-4 ml-2" />
                    </Button>
                )}
            </div>
        </div>
    )
}
