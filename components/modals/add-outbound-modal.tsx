"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AddOutboundModalProps {
    onAdd: (order: any) => void
}

export function AddOutboundModal({ onAdd }: AddOutboundModalProps) {
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({
        customer: "",
        items: "",
        value: "",
        status: "Processing",
    })

    const handleSubmit = () => {
        if (!formData.customer) return

        onAdd({
            id: `OUT-${Math.floor(Math.random() * 1000)}`,
            ...formData,
            items: parseInt(formData.items) || 0,
            date: new Date().toISOString().split('T')[0],
        })
        setOpen(false)
        setFormData({ customer: "", items: "", value: "", status: "Processing" })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    New Order
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Create Outbound Order</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="customer" className="text-right">
                            Customer
                        </Label>
                        <Input
                            id="customer"
                            value={formData.customer}
                            onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="items" className="text-right">
                            Items
                        </Label>
                        <Input
                            id="items"
                            type="number"
                            value={formData.items}
                            onChange={(e) => setFormData({ ...formData, items: e.target.value })}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="value" className="text-right">
                            Value
                        </Label>
                        <Input
                            id="value"
                            value={formData.value}
                            onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                            className="col-span-3"
                            placeholder="$0.00"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="status" className="text-right">
                            Status
                        </Label>
                        <Select
                            value={formData.status}
                            onValueChange={(val) => setFormData({ ...formData, status: val })}
                        >
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Processing">Processing</SelectItem>
                                <SelectItem value="Picked">Picked</SelectItem>
                                <SelectItem value="Packed">Packed</SelectItem>
                                <SelectItem value="Shipped">Shipped</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleSubmit}>Create Order</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
