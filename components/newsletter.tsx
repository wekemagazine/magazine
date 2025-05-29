"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast({
        title: "Cadastro realizado!",
        description: `E-mail ${email} cadastrado com sucesso!`,
      })
      setEmail("")
    }
  }

  return (
    <section className="bg-white py-16 text-center">
      <div className="container mx-auto px-5">
        <h3 className="text-3xl font-bold mb-5">Receba Atualizações de Ofertas</h3>
        <p className="max-w-2xl mx-auto mb-8 text-gray-600">
          Cadastre-se para receber as melhores ofertas e novidades diretamente no seu e-mail.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex gap-0">
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-r-none"
          />
          <Button type="submit" className="bg-blue-500 hover:bg-blue-600 rounded-l-none">
            Cadastrar
          </Button>
        </form>
      </div>
    </section>
  )
}
