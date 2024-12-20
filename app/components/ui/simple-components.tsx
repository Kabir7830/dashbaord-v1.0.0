import React from 'react'

export function Card({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`bg-white shadow rounded-lg ${className}`}>{children}</div>
}

export function Input({ className = '', ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`border rounded px-2 py-1 ${className}`} {...props} />
}

export function Select({ className = '', ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={`border rounded px-2 py-1 ${className}`} {...props} />
}

