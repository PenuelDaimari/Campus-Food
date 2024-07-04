

export const CustomButton = ({containerStyles, textStyles, children, isDisabled=false, handleClick, btnType='button'}) => {
  return (
    <>
      <button
        className={`${containerStyles} `}
        disabled={isDisabled}
        onClick={handleClick}
        type ={btnType}
      >
        <span className={`${textStyles}`}>
          {children}
        </span>
      </button>
    </>
  )
}
