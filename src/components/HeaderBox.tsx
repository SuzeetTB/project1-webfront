//props are all imported from the type declaration file index.d.ts
const HeaderBox = (props:HeaderBoxProps) => {
  return (
    <div className="header-box">
        <h1 className="header-box-title">{props.title}</h1>
        { props.type ==='greeting' && (
            <span className="text-bankGradient">&nbsp;{props.user}</span>
        )}
        <p className="header-box-subtext">
            {props.subtext}
        </p>
    </div>
  )
}

export default HeaderBox