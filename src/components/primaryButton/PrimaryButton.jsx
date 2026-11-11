import './PrimaryButton.css';

function PrimaryButton({label, onClickAction, isDisabled}) {
    return(
        <button type="button" onClick={onClickAction} disabled={isDisabled} >{label}</button>
    );
}

export default PrimaryButton;