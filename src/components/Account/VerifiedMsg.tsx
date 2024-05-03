import VerifiedSvg from '../Partials/Account/VerifiedSvg';

const VerifiedMsg = () => {
  return (
    <section className='p-6'>
    <div className="p-6 bg-primary-100/70  border-primary-400 dark:bg-primary-900/30 border dark:border-primary-700 rounded-md flex items-start">
      <div className='mr-2'>
      <VerifiedSvg/>
      </div>
      <div>
        <h2 className="text-xl font-semibold">Get Verified on Waanverse</h2>
        <p className="text-lg text-gray-600">Having a verified account adds credibility to your profile.</p>
      </div>
    </div>
    </section>
  );
}

export default VerifiedMsg;
