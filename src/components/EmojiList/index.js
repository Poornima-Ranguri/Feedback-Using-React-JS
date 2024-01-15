import './index.css'

const EmojiList = props => {
  const {emoji, onClickingEmoji} = props
  const {id, name, imageUrl} = emoji

  const onClicking = () => {
    onClickingEmoji()
  }

  return (
    <li className="list-cont" key={id}>
      <button type="button" className="btn" onClick={onClicking}>
        <img src={imageUrl} className="image" alt={name} />
      </button>

      <p className="parag">{name}</p>
    </li>
  )
}

export default EmojiList
