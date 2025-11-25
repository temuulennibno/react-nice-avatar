import { useState, useMemo } from 'react'
import Avatar, { genConfig } from '@temuulennibno/react-nice-avatar'
import type { AvatarFullConfig } from '@temuulennibno/react-nice-avatar'

const hairStyles = ['normal', 'thick', 'mohawk', 'womanLong', 'womanShort', 'curly', 'bald', 'afro', 'pixie', 'buzz', 'braids', 'longCurly'] as const
const hatStyles = ['none', 'beanie', 'cap', 'cowboy', 'headband', 'hijab', 'fedora'] as const
const eyeStyles = ['circle', 'oval', 'smile', 'shadow', 'wink'] as const
const glassesStyles = ['none', 'round', 'square', 'aviator', 'cyber'] as const
const noseStyles = ['short', 'long', 'round', 'pointed', 'button'] as const
const mouthStyles = ['laugh', 'smile', 'peace', 'open', 'serious', 'smirk'] as const
const shirtStyles = ['hoody', 'short', 'polo', 'vneck', 'crew'] as const
const earringsStyles = ['none', 'stud', 'hoop', 'drop'] as const

function App() {
  const [config, setConfig] = useState<AvatarFullConfig>(() => genConfig())
  const [seed, setSeed] = useState('')

  const randomAvatars = useMemo(() => {
    return Array.from({ length: 12 }, () => genConfig())
  }, [])

  const handleRandomize = () => {
    setConfig(genConfig())
  }

  const handleGenerateFromSeed = () => {
    if (seed) {
      setConfig(genConfig(seed))
    }
  }

  const updateConfig = (key: keyof AvatarFullConfig, value: string) => {
    setConfig(prev => ({ ...prev, [key]: value }))
  }

  return (
    <div className="container">
      <h1>React Nice Avatar Playground</h1>

      <div className="main-avatar">
        <Avatar
          style={{ width: '12rem', height: '12rem' }}
          {...config}
        />
      </div>

      <div className="controls">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div className="control-group">
            <label>Seed (email, name, etc.)</label>
            <input
              type="text"
              value={seed}
              onChange={(e) => setSeed(e.target.value)}
              placeholder="Enter seed..."
            />
          </div>

          <div className="control-group">
            <label>Sex</label>
            <select value={config.sex} onChange={(e) => updateConfig('sex', e.target.value)}>
              <option value="man">Man</option>
              <option value="woman">Woman</option>
            </select>
          </div>

          <div className="control-group">
            <label>Hair Style</label>
            <select value={config.hairStyle} onChange={(e) => updateConfig('hairStyle', e.target.value)}>
              {hairStyles.map(style => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>Hat Style</label>
            <select value={config.hatStyle} onChange={(e) => updateConfig('hatStyle', e.target.value)}>
              {hatStyles.map(style => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>Eye Style</label>
            <select value={config.eyeStyle} onChange={(e) => updateConfig('eyeStyle', e.target.value)}>
              {eyeStyles.map(style => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>Glasses Style</label>
            <select value={config.glassesStyle} onChange={(e) => updateConfig('glassesStyle', e.target.value)}>
              {glassesStyles.map(style => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>Nose Style</label>
            <select value={config.noseStyle} onChange={(e) => updateConfig('noseStyle', e.target.value)}>
              {noseStyles.map(style => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>Mouth Style</label>
            <select value={config.mouthStyle} onChange={(e) => updateConfig('mouthStyle', e.target.value)}>
              {mouthStyles.map(style => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>Shirt Style</label>
            <select value={config.shirtStyle} onChange={(e) => updateConfig('shirtStyle', e.target.value)}>
              {shirtStyles.map(style => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>Earrings Style</label>
            <select value={config.earringsStyle} onChange={(e) => updateConfig('earringsStyle', e.target.value)}>
              {earringsStyles.map(style => (
                <option key={style} value={style}>{style}</option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>Face Color</label>
            <input
              type="color"
              value={config.faceColor}
              onChange={(e) => updateConfig('faceColor', e.target.value)}
            />
          </div>

          <div className="control-group">
            <label>Hair Color</label>
            <input
              type="color"
              value={config.hairColor}
              onChange={(e) => updateConfig('hairColor', e.target.value)}
            />
          </div>

          <div className="control-group">
            <label>Shirt Color</label>
            <input
              type="color"
              value={config.shirtColor}
              onChange={(e) => updateConfig('shirtColor', e.target.value)}
            />
          </div>

          <div className="control-group">
            <label>Background Color</label>
            <input
              type="color"
              value={config.bgColor?.startsWith('#') ? config.bgColor : '#9287FF'}
              onChange={(e) => updateConfig('bgColor', e.target.value)}
            />
          </div>
        </div>

        <div className="button-group" style={{ marginTop: '1rem' }}>
          <button className="btn btn-primary" onClick={handleRandomize}>
            Randomize
          </button>
          <button className="btn btn-secondary" onClick={handleGenerateFromSeed}>
            Generate from Seed
          </button>
        </div>
      </div>

      <h2>Generated Config</h2>
      <div className="code-block">
        <pre>{JSON.stringify(config, null, 2)}</pre>
      </div>

      <h2>Random Avatars Gallery</h2>
      <div className="avatar-grid">
        {randomAvatars.map((avatarConfig, index) => (
          <div
            key={index}
            className="avatar-item"
            onClick={() => setConfig(avatarConfig)}
            style={{ cursor: 'pointer' }}
          >
            <Avatar
              style={{ width: '5rem', height: '5rem' }}
              {...avatarConfig}
            />
            <span>Click to use</span>
          </div>
        ))}
      </div>

      <h2>Hair Styles</h2>
      <div className="avatar-grid">
        {hairStyles.map(style => (
          <div key={style} className="avatar-item">
            <Avatar
              style={{ width: '5rem', height: '5rem' }}
              {...genConfig({ hairStyle: style, hatStyle: 'none' })}
            />
            <span>{style}</span>
          </div>
        ))}
      </div>

      <h2>Hat Styles</h2>
      <div className="avatar-grid">
        {hatStyles.map(style => (
          <div key={style} className="avatar-item">
            <Avatar
              style={{ width: '5rem', height: '5rem' }}
              {...genConfig({ hatStyle: style })}
            />
            <span>{style}</span>
          </div>
        ))}
      </div>

      <h2>Eye Styles</h2>
      <div className="avatar-grid">
        {eyeStyles.map(style => (
          <div key={style} className="avatar-item">
            <Avatar
              style={{ width: '5rem', height: '5rem' }}
              {...genConfig({ eyeStyle: style, glassesStyle: 'none' })}
            />
            <span>{style}</span>
          </div>
        ))}
      </div>

      <h2>Glasses Styles</h2>
      <div className="avatar-grid">
        {glassesStyles.map(style => (
          <div key={style} className="avatar-item">
            <Avatar
              style={{ width: '5rem', height: '5rem' }}
              {...genConfig({ glassesStyle: style })}
            />
            <span>{style}</span>
          </div>
        ))}
      </div>

      <h2>Mouth Styles</h2>
      <div className="avatar-grid">
        {mouthStyles.map(style => (
          <div key={style} className="avatar-item">
            <Avatar
              style={{ width: '5rem', height: '5rem' }}
              {...genConfig({ mouthStyle: style })}
            />
            <span>{style}</span>
          </div>
        ))}
      </div>

      <h2>Shirt Styles</h2>
      <div className="avatar-grid">
        {shirtStyles.map(style => (
          <div key={style} className="avatar-item">
            <Avatar
              style={{ width: '5rem', height: '5rem' }}
              {...genConfig({ shirtStyle: style })}
            />
            <span>{style}</span>
          </div>
        ))}
      </div>

      <h2>Earrings Styles</h2>
      <div className="avatar-grid">
        {earringsStyles.map(style => (
          <div key={style} className="avatar-item">
            <Avatar
              style={{ width: '5rem', height: '5rem' }}
              {...genConfig({ sex: 'woman', earringsStyle: style, hatStyle: 'none' })}
            />
            <span>{style}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
