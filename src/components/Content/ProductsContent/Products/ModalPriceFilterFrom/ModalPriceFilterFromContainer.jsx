import { setModalProductPriceFilter } from "actions/product-actions";
import PriceFilterModal from "Common/PriceFilterModal/PriceFilterModal";
import withFilters from "hoc/withFilters";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { change } from "redux-form";
import { getModalProductPriceFilter } from "selectors/products-selectors";
import { createMaxNumber } from "utils/validators";

const ModalPriceFilterFromContainer = ({ filters, query }) => {
  const pathName = useLocation().pathname;
  const dispatch = useDispatch();
  const history = useHistory();
  const f = { ...filters };

  let maxValue = null;
  let validator = null;
  if (!!f.price && !!f.price["$lt"] && +f.price["$lt"] > 0) {
    maxValue = +f.price["$lt"];
    validator = createMaxNumber(maxValue);
  }

  const handleSubmit = (values) => {
    if (!f.price) f.price = {};

    f.price["$gt"] = +values.value;

    query.set("filter", JSON.stringify(f));
    history.push(`${pathName}?${query}`);
    dispatch(setModalProductPriceFilter(null));
  };

  const data = useSelector((state) => getModalProductPriceFilter(state));

  const handleCloseModal = () => {
    dispatch(setModalProductPriceFilter(null));
  };

  useEffect(() => {
    if (data !== "from") return;
    if (!!filters.price && !!filters.price["$gt"]) {
      dispatch(change("ordPriceFilter", "value", filters.price["$gt"]));
    }
  }, [data, filters, dispatch]);

  return (
    <>
      {data === "from" && (
        <PriceFilterModal
          onSubmit={handleSubmit}
          handleCloseModal={handleCloseModal}
          validator={validator}
        >
          Минимальная стоимость
          {!!maxValue && (
            <>
              {" "}
              не должна превышать{" "}
              <span
                style={{
                  color: "var(--color-red)",
                  fontFamily: "var(--font-medium)",
                }}
              >
                {maxValue}₽
              </span>{" "}
            </>
          )}
        </PriceFilterModal>
      )}
    </>
  );
};
export default withFilters(ModalPriceFilterFromContainer);
