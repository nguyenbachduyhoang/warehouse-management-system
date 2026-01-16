"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Plus, Search, Edit2, Trash2, ArrowLeft, LogOut } from "lucide-react"

interface ProductsPageProps {
  onBack: () => void
  onLogout: () => void
}

export default function ProductsPage({ onBack, onLogout }: ProductsPageProps) {
  const [products, setProducts] = useState([
    { id: 1, name: "Electronics Pack A", sku: "SKU-001", category: "Electronics", stock: 450, price: "$120" },
    { id: 2, name: "Hardware Kit B", sku: "SKU-047", category: "Hardware", stock: 230, price: "$85" },
    { id: 3, name: "Connector Set", sku: "SKU-103", category: "Connectors", stock: 120, price: "$25" },
    { id: 4, name: "Cable Bundle", sku: "SKU-112", category: "Cables", stock: 890, price: "$45" },
    { id: 5, name: "Power Supply", sku: "SKU-201", category: "Power", stock: 310, price: "$95" },
  ])

  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.sku.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-card border-b border-border sticky top-0 z-40">
        <div className="px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-muted rounded-lg transition-colors text-muted-foreground">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-bold text-foreground">Products & Inventory</h1>
          </div>
          <Button onClick={onLogout} variant="ghost" className="text-muted-foreground hover:text-foreground">
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>
      </header>

      <main className="p-8 flex-1 overflow-auto max-w-7xl mx-auto w-full">
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search by product name or SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-card border-border text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add Product
          </Button>
        </div>

        <Card className="bg-card border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">SKU</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Stock</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground font-medium">{product.name}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{product.sku}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{product.category}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs">
                        {product.stock}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{product.price}</td>
                    <td className="px-6 py-4 text-sm flex gap-2">
                      <button className="p-2 hover:bg-muted rounded transition-colors">
                        <Edit2 className="w-4 h-4 text-blue-400" />
                      </button>
                      <button className="p-2 hover:bg-muted rounded transition-colors">
                        <Trash2 className="w-4 h-4 text-red-400" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </main>
    </div>
  )
}
