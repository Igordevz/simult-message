import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
   <div className='w-full h-screen flex items-center justify-center'> 
      <Card className='sm:min-w-[400px] '>
        <CardHeader>
          <CardTitle>Cadastro</CardTitle>
          <CardDescription>Este login ficará salvo em nosso sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <Label htmlFor='#email'>Coloque seu Email</Label>
            <Input placeholder='example@gmail.com' id='email'/>
            <br />
            <Label htmlFor='#password'>Coloque sua Senha</Label>
            <Input placeholder='example@gmail.com' id='password'/>
            <div className="flex items-center space-x-2 my-4">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <Button className='w-full'>Cadastrar</Button>
          </form>
        </CardContent>
      </Card>
   </div>
  )
}

