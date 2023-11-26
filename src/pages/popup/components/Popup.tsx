import '@pages/popup/components/Popup.css'
import withSuspense from '@src/shared/hoc/withSuspense'
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary'
import { CopyIcon, PipetteIcon } from './Icons'
import { hexToHsl, hexToRgb } from '../utils/hex-converter'
import { useState, useEffect } from 'react'

const Popup = () => {
  const [defaultColorCode, setDefaultColorCode] = useState('hex')
  const [currentColors, setCurrentColors] = useState({
    hex: '#ffffff',
    rgb: 'rgb(255, 255, 255)',
    hsl: 'hsl(0, 0%, 100%)',
  })
  const [palette, setPalette] = useState(['#ec8786', '#db9640', '#7db664', '#79a4fe', '#e886a7'])
  const [copiedColor, setCopiedColor] = useState(currentColors[defaultColorCode])

  useEffect(() => {
    navigator.clipboard.writeText(currentColors[defaultColorCode])
    setCopiedColor(currentColors[defaultColorCode])
  }, [currentColors, defaultColorCode])

  const onClickCode = (event) => {
    const color = event.target.value

    setDefaultColorCode(color)
  }

  const onClickCopy = (event) => {
    event.stopPropagation()
    const color = event.target.value

    navigator.clipboard.writeText(color)
    setCopiedColor(color)
  }

  const updateCurrentColors = (hex: string) => {
    const rgb = hexToRgb(hex)
    const hsl = hexToHsl(hex)

    const newCurrentColors = { hex, rgb, hsl }

    setCurrentColors(newCurrentColors)
  }

  const onClickPallete = (event) => {
    updateCurrentColors(event.target.value)
  }

  const onClickEyedrop = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ed = new (window as any).EyeDropper()
    const result = await ed.open()

    updateCurrentColors(result.sRGBHex)
    const newPalette = [result.sRGBHex, ...palette.slice(0, -1)]
    setPalette(newPalette)
  }

  const ButtonCode = ({ color, code }: { color: string; code: string }) => {
    const isDefaultCode = defaultColorCode === code
    const isColorCodied = color === copiedColor

    return (
      <button onClick={onClickCode} className={'btn btn-code'} value={code}>
        {isDefaultCode && <div style={{ backgroundColor: color }} className='btn-code__copied' />}
        <span className='btn-code__text'>{color}</span>

        <button onClick={onClickCopy} className={'btn btn--icon'} value={color}>
          <CopyIcon color={isColorCodied ? color : '#f5f5f5'} stroke='2' />
        </button>
      </button>
    )
  }

  return (
    <div className='popup'>
      {Object.entries(currentColors).map((color, index) => (
        <ButtonCode key={index} color={color[1]} code={color[0]} />
      ))}
      <div className='footer'>
        <button onClick={onClickEyedrop} className='btn btn--icon'>
          <PipetteIcon stroke='2' />
        </button>
        {palette.map((color, index) => (
          <button
            onClick={onClickPallete}
            key={index}
            style={{ backgroundColor: color }}
            className='btn btn--icon'
            value={color}
          />
        ))}
      </div>
    </div>
  )
}

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>)
