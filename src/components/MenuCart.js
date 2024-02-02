import "../pages/MenuCart/style.scss";

export function MenuCart({ isMenuShow, handleClose }) {
  const handleClick = () => {
    handleClose(false);
  };

  return (
    <div className="wrapper-cart">
      {isMenuShow && (
        <div className="cart-sidebar">
          <div className="cart-sidebar-header">
            <h4>Your Cart</h4>
            <div className="close-btn" onClick={handleClick}>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="cart-sidebar-body"></div>
          <div className="cart-sidebar-footer">
            <h4>Total: </h4>
            <span></span>
            <button className="btn-custom">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}
