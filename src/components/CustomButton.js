// import {Button} from 'react-bootstrap'

const CustomButton = ({onClick, disabled, type, customButtonStyling, titleStyles, title}) => {
    return (
      <button
        className="mt-2"
          onClick={onClick}
          disabled={disabled}
          type={type}
          style={{...customButtonStyling, textAlign: "center", borderRadius: "5px"}}
      >
          <strong style={titleStyles}>{title}</strong>
      </button>
    )
  }
  
  export default CustomButton