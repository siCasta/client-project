import { HtmlHTMLAttributes } from 'react'

function Button(props: HtmlHTMLAttributes<HTMLButtonElement>) {
    return <button {...props} />
}

export default Button
