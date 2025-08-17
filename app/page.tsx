import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github } from "lucide-react"

export default function WinlatorGamesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#2CA852" }}>
      {/* Header */}
      <header className="py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src="https://i.ibb.co/TDcqJLWN/Background-Eraser-20250816-140208739.png"
            alt="Winlator Games Logo"
            className="mx-auto mb-4 h-24 w-auto"
          />
          <h2 className="text-xl font-medium text-white">Plataforma que Disponibiliza Jogos de Pc</h2>
        </div>
      </header>

      {/* Main Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-black border-2 mb-12">
            <CardContent className="p-8 text-center">
              <h1 className="text-3xl font-bold text-black mb-6">O que é o Winlator Games?</h1>
              <p className="text-lg mb-8" style={{ color: "#333333" }}>
                Winlator Games é um aplicativo que disponibiliza Jogos de PC de Graça Para Download, Configurações para
                melhorar o Desepenho do Emulador, Emulador Winlator e Suas Variantes Atualizado e Mods para Jogos.
              </p>
              <Button asChild className="bg-black hover:bg-gray-600 text-white px-8 py-3 text-lg">
                <a
                  href="https://github.com/RouBR-dev/Winlator-Games"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Github className="w-5 h-5" />Baixar no Github 
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-white border-black border-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-bold text-black mb-3">Jogos de PC</h3>
                <p style={{ color: "#333333" }}>Lista de destaques com jogos compatíveis para download gratuito</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-black border-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-black mb-3">Emuladores Android</h3>
                <p style={{ color: "#333333" }}>Winlator e suas variantes sempre atualizadas</p>
              </CardContent>
            </Card>

            <Card className="bg-white border-black border-2">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-xl font-bold text-black mb-3">Otimização</h3>
                <p style={{ color: "#333333" }}>FPS, ajustes e mods para melhor desempenho</p>
              </CardContent>
            </Card>
          </div>

          {/* Image/Highlight Section */}
          <Card className="bg-white border-black border-2 mb-12">
            <CardContent className="p-8 text-center">
              <img
                src="/winlator-games-interface.png"
                alt="Winlator Games Interface"
                className="mx-auto mb-6 rounded-lg max-w-full h-auto"
              />
              <p className="text-lg" style={{ color: "#333333" }}>
                Explore jogos compatíveis com Winlator direto no seu PC ou Android.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm text-black">© 2025 Winlator Games | GitHub Oficial</p>
        </div>
      </footer>
    </div>
  )
}
