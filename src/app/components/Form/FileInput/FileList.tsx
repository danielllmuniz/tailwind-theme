'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'

import { Trash2, UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'
import { formatBytes } from '@/app/utils/format-bytes'
import { Button } from '../../Button'
import { FileItem } from './FileItem'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state="complete"
          />
        )
      })}
    </div>
  )
}
