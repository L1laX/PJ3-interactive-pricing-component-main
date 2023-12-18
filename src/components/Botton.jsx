function Botton({ btnName }) {
  return (
    <button
      type="submit"
      className="rounded-3xl bg-slate-700 px-10 py-3  text-slate-300 hover:text-white"
    >
      {btnName}
    </button>
  );
}

export default Botton;
