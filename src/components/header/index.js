import './style.css';

export default function Header(props){
    return (
        <div className='fundo'>
            <h1>HEADER</h1>
            {props.children}
        </div>
    )
}