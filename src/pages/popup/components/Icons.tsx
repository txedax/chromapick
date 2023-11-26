interface IIcon {
  color?: string
  stroke?: string
  size?: string
}

export const PipetteIcon = ({ color = 'currentColor', stroke = '1', size = '15' }: IIcon) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-pipette'
      style={{ pointerEvents: 'none' }}
    >
      <path d='m2 22 1-1h3l9-9' />
      <path d='M3 21v-3l9-9' />
      <path d='m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z' />
    </svg>
  )
}

// export const CopyIcon = ({ color = 'currentColor', stroke = '1', size = '14' }: IIcon) => {
//   return (
//     <svg
//       xmlns='http://www.w3.org/2000/svg'
//       width={size}
//       height={size}
//       viewBox='0 0 24 24'
//       fill='none'
//       stroke={color}
//       strokeWidth={stroke}
//       strokeLinecap='round'
//       strokeLinejoin='round'
//       className='lucide lucide-copy'
//       style={{ pointerEvents: 'none' }}
//     >
//       <rect width='14' height='14' x='8' y='8' rx='2' ry='2' />
//       <path d='M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' />
//     </svg>
//   )
// }

export const CopyIcon = ({ color = 'white', stroke = '1', size = '14' }: IIcon) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill={color}
      stroke='#333333'
      strokeWidth={stroke}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-layers-2'
      style={{ pointerEvents: 'none' }}
    >
      <path d='m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12' />
      <path d='M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z' />
    </svg>
  )
}
