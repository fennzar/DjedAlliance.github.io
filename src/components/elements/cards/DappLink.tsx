import ArrowButton from '../../blocks/svg/ArrowButton';

interface Props {
  text: string
  href: string
}

const DappLink = (props: Props): JSX.Element => {
	return (
		<div className='flex flex-row align-middle my-2'>
			<a href={props.href} target="_blank" rel="noreferrer"><p className='text-white mt-0 lg:mt-5 m-0 lg:m-3 md:mt-4 md:mx-4'>Launch {props.text}</p></a>
			<span className='hidden lg:block md:block'><ArrowButton onClick={() => window.open(props.href, '_blank')}/></span>
		</div>
	);
};

export default DappLink;
