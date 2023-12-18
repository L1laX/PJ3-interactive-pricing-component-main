function ToggleBotton({ checkSubscibe, isCheck }) {
  return (
    <>
      <div className="form-control">
        <label className="label cursor-pointer">
          <input
            type="checkbox"
            className="toggle border-white bg-[hsl(230,100%,99%)] [--tglbg:hsl(223,50%,87%)] hover:bg-white hover:[--tglbg:hsl(174,86%,45%)]"
            onChange={checkSubscibe}
            value={isCheck}
          />
        </label>
      </div>
    </>
  );
}

export default ToggleBotton;
