import { generateWhatsAppLink } from "@/utils/generate-whatsapp-link"
import { MessageCircle } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

export const CustomQuery = () => {
    const [message, setMessage] = useState("")
    return <>
        <div>
            <label
                htmlFor="custom-query-message"
                className="block text-sm font-medium text-gray-900 mb-2"
            >
                Describe tu consulta
            </label>
            <textarea
                id="custom-query-message"
                rows={6}
                placeholder="Ejemplo: Necesito asesoría para constituir una SAS, tengo dudas sobre los requisitos y documentos necesarios..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-law-primary focus:border-transparent resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            ></textarea>
        </div>

        <Button
            id="custom-query-button"
            className="w-full bg-law-primary hover:bg-law-primary/90 text-law-button-text text-lg py-3 cursor-pointer"
            size="lg"
            onClick={() => {
                const whatsappLink = generateWhatsAppLink(message)
                window.open(whatsappLink, "_blank")
            }}
        >
            <MessageCircle className="mr-2 h-5 w-5" />
            Enviar Consulta por WhatsApp
        </Button>
    </>
}