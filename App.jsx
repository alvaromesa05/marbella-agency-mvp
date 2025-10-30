import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, ArrowRight, Building2, ShieldCheck, Handshake, Star, Home } from 'lucide-react'

export default function App() {
  const [sent, setSent] = useState(false)

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6"/>
            <span className="font-semibold tracking-tight text-lg">TuMarca Marbella</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:text-gray-600">Servicios</a>
            <a href="#zonas" className="hover:text-gray-600">Zonas</a>
            <a href="#proceso" className="hover:text-gray-600">Cómo trabajamos</a>
            <a href="#contacto" className="hover:text-gray-600">Contacto</a>
          </div>
          <a href="#contacto" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-2xl bg-gray-900 text-white hover:bg-black transition">
            Solicitar valoración <ArrowRight className="w-4 h-4"/>
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"/>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/20"/>
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
          <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight max-w-3xl">
            Conectamos <span className="underline decoration-amber-400 decoration-4 underline-offset-4">propietarios</span> con compradores en <span className="whitespace-nowrap">Marbella</span>
          </motion.h1>
          <p className="mt-4 md:text-lg max-w-2xl text-gray-700">
            Agencia boutique de intermediación. Cero complicaciones: evaluamos tu vivienda, encontramos al comprador ideal y cerramos la venta con seguridad jurídica.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contacto" className="px-5 py-3 rounded-2xl bg-gray-900 text-white text-sm font-medium hover:bg-black">Quiero vender</a>
            <a href="#contacto" className="px-5 py-3 rounded-2xl border text-sm font-medium hover:bg-gray-50">Busco comprar</a>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            <Stat number="> 3%" label="Comisión estándar"/>
            <Stat number="> 48h" label="Publicación del listing"/>
            <Stat number="+50" label="Compradores cualificados"/>
            <Stat number="100%" label="Acompañamiento legal"/>
          </div>
        </div>
      </section>

      {/* SERVICIOS / VALOR */}
      <section id="servicios" className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Por qué elegirnos</h2>
        <p className="mt-2 text-gray-700 max-w-2xl">Intermediación honesta, marketing potente y procesos claros. Nuestro foco: vender al mejor precio posible en el menor tiempo viable.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <Card icon={<Building2 className="w-5 h-5"/>} title="Marketing de lujo">
            Fotografías y vídeo profesional, anuncio premium en portales y difusión en BBDD de compradores internacionales.
          </Card>
          <Card icon={<ShieldCheck className="w-5 h-5"/>} title="Seguridad jurídica">
            Contrato de intermediación, contrato de arras y cierre en notaría con asesoría legal de confianza.
          </Card>
          <Card icon={<Handshake className="w-5 h-5"/>} title="Comisión transparente">
            Honorarios claros desde el inicio (habitual 3%–5%). Solo cobramos si vendemos.
          </Card>
        </div>
      </section>

      {/* ZONAS */}
      <section id="zonas" className="bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Zonas clave de Marbella</h2>
          <p className="mt-2 text-gray-700 max-w-2xl">Dominamos los micro‑mercados con mayor demanda: precio, estilo de vida y velocidad de venta varían por zona.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <ZoneCard title="Golden Mile" desc="Villas y áticos de lujo, demanda internacional constante."/>
            <ZoneCard title="Nueva Andalucía" desc="Golf Valley, familias y compradores nórdicos."/>
            <ZoneCard title="Sierra Blanca / La Zagaleta" desc="Ultra‑lujo y privacidad absoluta."/>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Cómo trabajamos</h2>
        <ol className="mt-8 grid md:grid-cols-3 gap-6">
          <Step number={1} title="Evaluación y briefing" text="Visitamos la propiedad, analizamos precio óptimo y definimos estrategia."/>
          <Step number={2} title="Go‑to‑market" text="Reportaje, publicación en portales y outreach a nuestra BBDD."/>
          <Step number={3} title="Cierre seguro" text="Ofertas, arras y firma en notaría. Acompañamos todo el proceso."/>
        </ol>
        <div className="mt-10">
          <a href="#contacto" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gray-900 text-white text-sm font-medium hover:bg-black">Solicitar valoración gratuita <ArrowRight className="w-4 h-4"/></a>
        </div>
      </section>

      {/* TESTIMONIOS (placeholder) */}
      <section className="max-w-7xl mx-auto px-6 pb-2">
        <div className="flex items-center gap-2 text-amber-500">
          {[...Array(5)].map((_,i)=>(<Star key={i} className="w-5 h-5 fill-current"/>))}
          <span className="text-sm text-gray-700 ml-2">Clientes 5/5 (inicial)</span>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Hablemos</h2>
            <p className="mt-2 text-gray-700">Cuéntanos si quieres vender o comprar y te contactamos en menos de 24h.</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Marbella, Málaga</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> +34 600 000 000</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> info@tumarca.com</li>
            </ul>
          </div>

          {/* Formulario */}
          <form
            action="https://formspree.io/f/your-id"
            method="POST"
            onSubmit={(e)=>{e.preventDefault(); setSent(true);}}
            className="p-6 rounded-3xl border shadow-sm bg-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">Nombre</label>
                <input name="nombre" required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"/>
              </div>
              <div>
                <label className="text-sm">Teléfono</label>
                <input name="telefono" required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"/>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900"/>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm">¿Qué necesitas?</label>
                <select name="tipo" className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900">
                  <option>Quiero vender</option>
                  <option>Quiero comprar</option>
                  <option>Valoración de vivienda</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="text-sm">Mensaje</label>
                <textarea name="mensaje" rows={4} className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Cuéntanos zona, presupuesto o características"/>
              </div>
            </div>
            <button type="submit" className="mt-5 w-full rounded-2xl bg-gray-900 text-white py-3 text-sm font-medium hover:bg-black">
              Enviar solicitud
            </button>
            {sent && (
              <p className="mt-3 text-sm text-green-600">¡Recibido! Te contactaremos muy pronto.</p>
            )}
            <p className="mt-4 text-xs text-gray-500">Al enviar aceptas nuestra <a href="#" className="underline">Política de Privacidad</a>.</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} TuMarca Marbella. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Aviso Legal</a>
            <a href="#" className="hover:underline">Privacidad</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Stat({ number, label }){
  return (
    <div className="rounded-2xl border bg-white p-4 shadow-sm">
      <div className="text-xl font-semibold">{number}</div>
      <div className="text-xs text-gray-600 mt-1">{label}</div>
    </div>
  )
}

function Card({ icon, title, children }){
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-xl bg-gray-100">{icon}</div>
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-gray-700">{children}</p>
    </div>
  )
}

function ZoneCard({ title, desc }){
  return (
    <div className="rounded-2xl overflow-hidden border bg-white">
      <div className="h-36 bg-[url('https://images.unsplash.com/photo-1559586619-4bb00dcd0e9b?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center"/>
      <div className="p-5">
        <h3 className="font-medium">{title}</h3>
        <p className="mt-1 text-sm text-gray-700">{desc}</p>
      </div>
    </div>
  )
}
