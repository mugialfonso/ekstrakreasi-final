function WelcomingSection({ nama, onNext }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="bg-white rounded-lg shadow-2xl p-8 md:p-20 w-full max-w-md md:max-w-[744px] h-auto md:h-[426px]">
        <div className="p-8">
          <h2 className=" text-lg md:text-2xl font-bold text-center text-[#67C6E3] mb-6">Hi, {nama}!</h2>
          <p className="text-sm md:text-base font-bold text-center text-[#67C6E3] mb-6">Siap untuk menemukan kegiatan yang pas untukmu? Yuk, mulai tes dengan menekan tombol di bawah!</p>
          <button onClick={onNext} type="button" className="w-full bg-[#378CE7] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
            lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomingSection;
