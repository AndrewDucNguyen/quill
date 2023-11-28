import React, { useState } from 'react'
import { Dialog, DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Expand } from 'lucide-react'

const PdfFullscreen = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Dialog open={isOpen} onOpenChange={(v) => {
            if (!v) {
                setIsOpen(v)
            }
        }}>
            <DialogTrigger>
                <Button>
                    <Expand className='h-4 w-4' />
                </Button>
            </DialogTrigger>
        </Dialog>
    )
}

export default PdfFullscreen