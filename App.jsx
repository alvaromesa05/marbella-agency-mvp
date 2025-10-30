import { Home } from 'lucide-react'

export default function App() {
  return (
    <div className='min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold flex items-center gap-2'>
        <Home className='w-8 h-8 text-amber-500' /> TuMarca Marbella
      </h1>
      <p className='text-gray-700 mt-4 max-w-lg text-center'>
        Agencia boutique de intermediación inmobiliaria en Marbella. Conectamos propietarios con compradores en tiempo récord.
      </p>
    </div>
  )
}
