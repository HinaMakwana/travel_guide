'use client';

import { Typography } from '@material-tailwind/react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

export default function Login() {
  return (
	<div className='flex justify-center mt-52'>
		<div className="flex flex-col gap-4 bg-slate-200 w-1/2 p-10 rounded-xl">
			<h1	className='text-4xl font-bold text-center text-gray-500'>Login</h1>
			<div>
				<div className="mb-2 block">
				<Label
					htmlFor="email1"
					value="Your email"
				/>
				</div>
				<TextInput
				id="email1"
				placeholder="xyz@gmail.com"
				required
				type="email"
				/>
			</div>
			<div>
				<div className="mb-2 block">
				<Label
					htmlFor="password1"
					value="Your password"
				/>
				</div>
				<TextInput
				id="password1"
				placeholder='password'
				required
				type="password"
				/>
			</div>
			<div className="flex items-center gap-2">
				<Checkbox id="remember" />
				<Label htmlFor="remember">
				Remember me
				</Label>
			</div>
			<Button type="submit">
				Login
			</Button>
			<Typography color="gray" className="mt-4 text-center font-normal">
			Don't have an account?{" "}
			<a
				href="/signup"
				className="font-medium text-gray-500 transition-colors hover:text-gray-700"
			>
				Register
			</a>
			</Typography>
		</div>
	</div>
  )
}
