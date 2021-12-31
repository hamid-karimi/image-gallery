import ImgFrame from './ImgFrame'

const Column = ({ images }) => {
  return (
    <div className="column">
      {images.map((img, i) => {
        return <ImgFrame key={i} src={img.src} h={img.height} author={img.author} />
      })}
    </div>
  )
}

export default Column