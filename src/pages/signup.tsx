'use client';

import { Typography } from '@material-tailwind/react';
import { Button, Label, TextInput } from 'flowbite-react';

export default function SignUp() {
  return (
	<div className='flex justify-center mt-52'>
		<div className="flex flex-col gap-4 bg-slate-200 w-1/2 p-10 rounded-xl">
			<h1	className='text-4xl font-bold text-center text-gray-500'>SignUp</h1>
			<div>
				<div className="mb-2 block">
				<Label
					htmlFor="name"
					value="name"
				/>
				</div>
				<TextInput
				id="name"
				placeholder=""
				required
				type="text"
				/>
			</div>
			<div>
				<div className="mb-2 block">
				<Label
					htmlFor="email"
					value="Your email"
				/>
				</div>
				<TextInput
				id="email"
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
			<Button type="submit">
				Register
			</Button>
			<Typography color="gray" className="mt-4 text-center font-normal">
			Already have an account?{" "}
			<a
				href="/login"
				className="font-medium text-gray-500 transition-colors hover:text-gray-700"
			>
				Login
			</a>
			</Typography>
		</div>
	</div>
  )
}
