import Link from 'next/link'

export default function Menu(){
    return(
        <div className='flex flex-col gap-2'>
            <Link href='/'>Main</Link>
            <Link href='/strona1'>Strona 1</Link>
            <Link href='/strona2'>Strona 2</Link>
            <Link href='/strona3'>Strona 3</Link>
            <Link href='/strona4'>Strona 4</Link>
            <Link href='/strona5'>Strona 5</Link>
            <Link href='/strona6'>Strona 6</Link>
        </div>
    )
}