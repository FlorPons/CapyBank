import * as React from "react"
import { SVGProps } from "react"
const HelpSVG = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="icon icon-tabler icons-tabler-outline icon-tabler-help"
        {...props}
    >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M12 17v.01" />
        <path d="M12 13.5a1.5 1.5 0 0 1 1-1.5 2.6 2.6 0 1 0-3-4" />
    </svg>
)
export default HelpSVG
