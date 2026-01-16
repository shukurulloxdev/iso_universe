// 'use client'

// import { Button } from '@/components/ui/button'
// import { Card } from '@/components/ui/card'
// import {
// 	Form,
// 	FormControl,
// 	FormField,
// 	FormItem,
// 	FormLabel,
// 	FormMessage,
// } from '@/components/ui/form'
// import { Input } from '@/components/ui/input'
// import { sendBotSchema } from '@/lib/validation'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { useForm } from 'react-hook-form'
// import z from 'zod'

// export default function SendMessage() {
// 	const form = useForm<z.infer<typeof sendBotSchema>>({
// 		resolver: zodResolver(sendBotSchema),
// 		defaultValues: {
// 			fullName: '',
// 			tel: '',
// 		},
// 	})

// 	async function onSubmit(values: z.infer<typeof sendBotSchema>) {
// 		console.log(values)
// 		try {
// 			const telegramBotToken = '8112175448:AAGzbrnD2awsoBluvINW4r-PhIT5YOzT4LE'
// 			const chatId = '8350642266'
// 			const res = await fetch(
// 				`https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
// 				{
// 					method: 'POST',
// 					headers: { 'Content-Type': 'application/json' },
// 					body: JSON.stringify({
// 						chat_id: chatId,
// 						text: `Mijoz ismi: ${values.fullName}, Telefon raqami: ${values.tel}`,
// 					}),
// 				}
// 			)
// 			console.log(res)
// 		} catch (err) {
// 			console.log(err)
// 		}
// 	}
// 	return (
// 		<main className='h-full bg-[#F7F7F7] flex items-center justify-center px-4'>
// 			<Card className='w-full max-w-[420px] bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8'>
// 				{/* Sarlavha */}
// 				<h2 className='text-[#1D1D1F] text-[28px] font-[600] leading-[1.3]'>
// 					Mutaxassis bilan suhbat
// 				</h2>
// 				<p className='text-[#6E6E73] text-[15px] mt-2 leading-[1.4]'>
// 					Aloqa ma&apos;lumotlaringizni qoldiring va menejerimiz loyiha haqida
// 					ko&apos;proq qiziqarli ma&apos;lumotlar beradi
// 				</p>
// 				<Form {...form}>
// 					<form
// 						onSubmit={form.handleSubmit(onSubmit)}
// 						className='mt-6 space-y-4'
// 					>
// 						<FormField
// 							control={form.control}
// 							name='fullName'
// 							render={({ field }) => (
// 								<FormItem>
// 									<FormLabel>Username</FormLabel>
// 									<FormControl>
// 										<Input placeholder='shadcn' {...field} />
// 									</FormControl>
// 									<FormMessage />
// 								</FormItem>
// 							)}
// 						/>
// 						<FormField
// 							control={form.control}
// 							name='tel'
// 							render={({ field }) => (
// 								<FormItem>
// 									<FormLabel>Telfon nomeringiz?</FormLabel>
// 									<FormControl>
// 										<Input placeholder='shadcn' {...field} />
// 									</FormControl>
// 									<FormMessage />
// 								</FormItem>
// 							)}
// 						/>

// 						<Button
// 							type='submit'
// 							className='w-full h-[50px] mt-2 rounded-xl bg-[#0071E3] hover:bg-[#0062C9] text-white text-[16px] font-[500] transition-colors'
// 						>
// 							Yuborish
// 						</Button>
// 					</form>
// 				</Form>
// 			</Card>
// 		</main>
// 	)
// }
'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { sendBotSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
import z from 'zod'

export default function SendMessage() {
	const form = useForm<z.infer<typeof sendBotSchema>>({
		resolver: zodResolver(sendBotSchema),
		defaultValues: {
			fullName: '',
			tel: '',
		},
	})

	async function onSubmit(values: z.infer<typeof sendBotSchema>) {
		try {
			const telegramBotToken = '8112175448:AAGzbrnD2awsoBluvINW4r-PhIT5YOzT4LE'
			const chatId = '8350642266'
			await fetch(
				`https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						chat_id: chatId,
						parse_mode: 'HTML',
						text: `
						<b>📩 Yangi mijoz arizasi</b>
						
						👤 <b>Ismi:</b> ${values.fullName}
						📞 <b>Telefon:</b> ${values.tel}
						
						🏢 <i>Margilon city</i>
						⏰ ${new Date().toLocaleString()}
								`,
					}),
				}
			)

			// toast({
			//   title: 'Yuborildi ✅',
			//   description: 'Tez orada siz bilan bog‘lanamiz',
			// })

			form.reset()
		} catch (error) {
			// toast({
			//   variant: 'destructive',
			//   title: 'Xatolik ❌',
			//   description: 'Qayta urinib ko‘ring',
			// })
			console.log(error)
		} finally {
			// setLoading(false)
		}
	}

	return (
		<section className='md:py-12 py-8 max-md:px-4 '>
			<Card className='mx-auto max-w-7xl overflow-hidden rounded-xl shadow-xl'>
				<div className='grid md:grid-cols-2'>
					{/* IMAGE */}
					<div className='relative h-[260px] md:h-[100%]'>
						<Image
							src='/margiloncity/img1.webp'
							alt='Architecture'
							fill
							className='object-cover'
							priority
						/>
					</div>
					<div className='p-6 md:p-8'>
						<h2 className='text-2xl font-bold text-[#1D1D1F]'>
							Mutaxassis bilan suhbat
						</h2>

						<p className='mt-2 text-xs md:text-sm text-[#6E6E73]'>
							Aloqa maʼlumotlaringizni qoldiring va menejerimiz loyiha haqida
							batafsil maʼlumot beradi
						</p>

						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className='mt-6 space-y-4'
							>
								<FormField
									control={form.control}
									name='fullName'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Ismingiz</FormLabel>
											<FormControl>
												<Input placeholder='Ismingizni kiriting' {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name='tel'
									render={({ field }) => (
										<FormItem>
											<FormLabel>Telefon raqamingiz</FormLabel>
											<FormControl>
												<InputMask
													mask='+\9\9\8 (99) 999-99-99'
													placeholder='+998 (__) ___-__-__'
													value={field.value}
													onChange={field.onChange}
												>
													{(
														inputProps: React.InputHTMLAttributes<HTMLInputElement>
													) => <Input {...inputProps} />}
												</InputMask>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<Button
									type='submit'
									className='w-full py-2 rounded-xl bg-orange-500 hover:bg-orange-600 transition'
								>
									Yuborish
								</Button>
							</form>
						</Form>
					</div>
				</div>
			</Card>
		</section>
	)
}
