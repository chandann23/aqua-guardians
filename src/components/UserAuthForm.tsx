'use client'

import { type FC, useState } from 'react'
import { signIn } from "next-auth/react"
import { Icons } from './Icons'
import { useToast } from './ui/use-toast'
import { Button } from './ui/button'
import { cn } from '~/lib/utils'


const UserAuthForm: FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { toast } = useToast()

  const loginWithGoogle = async () => {
    setIsLoading(true)

    try {
      await signIn('google')
    } catch (error) {
      toast({
        title: "There was a problem.",
        description: "There was an error logging in with Google.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex justify-center ', className)} {...props}>
      <Button onClick={loginWithGoogle} isLoading={isLoading} size='sm' className='w-full'>
        {isLoading ? null : <Icons.google className='h-4 w-4 mr-2' />}
        Google
      </Button>
    </div>
  )
}

export default UserAuthForm
