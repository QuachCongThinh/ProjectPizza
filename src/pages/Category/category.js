import React from "react";
import { mockListCategories as Categories } from "../../data/HomePage/Categories";
import "./style.scss";

function Category() {
  return (
    <div className="categories">
      {Categories.data_1?.map((item) => (
        <>
          <div className="top-categories">
            <div className="categories-bg">
              <img src={item.imageUrl} alt="Bg" />
            </div>
            <div className="categories-content">
              <div className="categories-content-inner">
                <div className="categories-header">
                  <h5 className="primary">{item.primary}</h5>
                  <h2 className="title">{item.title}</h2>
                  <p className="subtitle">{item.subtitle}</p>
                </div>
                {item.row && (
                  <div className="categories-row-top">
                    {item.row.map((rowItem) => (
                      <div className="row-item">
                        <div className="menu-item">
                          <div className="menu-item-top">
                            <h5 className="title">{rowItem.title}</h5>
                            <div className="row-dots"></div>
                            <p className="price">{rowItem.price}</p>
                          </div>
                          <div className="menu-item-bottom">
                            <p className="subtitle">{rowItem.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="bottom-categories">
            {Categories.data_2.map((item) => (
              <>
                <div className="categories-bg">
                  <img src={item.imageUrl} alt="Bg" />
                </div>
                <div className="categories-content">
                  <div className="categories-content-inner">
                    <div className="categories-header">
                      <h5 className="primary">{item.primary}</h5>
                      <h2 className="title">{item.title}</h2>
                      <p className="subtitle">{item.subtitle}</p>
                    </div>
                    {item.row && (
                      <div className="categories-row-bottom">
                        {item.row.map((rowItem) => (
                          <div className="row-item">
                            <div className="menu-item">
                              <div className="menu-item-bottom">
                                <h5 className="title">{rowItem.title}</h5>
                                <div className="row-dots"></div>
                                <p className="price">{rowItem.price}</p>
                              </div>
                              <div className="menu-item-bottom">
                                <p className="subtitle">{rowItem.subtitle}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
export default Category;
