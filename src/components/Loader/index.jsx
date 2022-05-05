import css from './styles.module.scss';

const Loader = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col'>
            <div className={css.loader}></div>
            <h1 className='font-bold text-2xl mt-5 text-purple-500'>Loading</h1>
        </div>
    );
}
 
export default Loader;