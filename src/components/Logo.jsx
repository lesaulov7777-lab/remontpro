export default function Logo({ className = '', light = false }) {
  return (
    <a href="#" className={`text-xl font-bold tracking-tight ${className}`}>
      <span className={light ? 'text-white' : 'text-text-primary'}>Ремонт</span>
      <span className="text-accent">Про</span>
    </a>
  )
}
