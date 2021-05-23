import { setModalPriceFilter } from "actions/orders-actions";
import PriceFilterModal from "Common/PriceFilterModal/PriceFilterModal";
import withFilters from "hoc/withFilters";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { change } from "redux-form";
import { getModalPriceFilter } from "selectors/orders-selectors";
import { createMinNumber } from "utils/validators";

const ModalPriceFilterToContainer = ({ filters, query }) => {
  const pathName = useLocation().pathname;
  const dispatch = useDispatch();
  const history = useHistory();
  const f = { ...filters };

  // Находим минимальную сумму, если она уже указана
  let minValue = null;
  let validator = null;
  if (!!f.price && !!f.price["$gt"] && +f.price["$gt"] > 0) {
    minValue = +f.price["$gt"];
    validator = createMinNumber(minValue);
  }

  const handleSubmit = (values) => {
    // Если нет фильтра по цене, то делаем его пустым объектом
    if (!f.price) f.price = {};

    // Устанавливаем в него значение формы
    f.price["$lt"] = +values.value;

    query.set("filter", JSON.stringify(f));
    history.push(`${pathName}?${query}`);
    dispatch(setModalPriceFilter(null));
  };

  const data = useSelector((state) => getModalPriceFilter(state));

  const handleCloseModal = () => {
    dispatch(setModalPriceFilter(null));
  };

  // Подставляем в форму значение если оно уже было в фильтре
  useEffect(() => {
    if (data !== "to") return;
    if (!!filters.price && !!filters.price["$lt"]) {
      dispatch(change("ordPriceFilter", "value", filters.price["$lt"]));
    }
  }, [data, filters, dispatch]);

  return (
    <>
      {data === "to" && (
        <PriceFilterModal
          onSubmit={handleSubmit}
          handleCloseModal={handleCloseModal}
          validator={validator}
        >
          Максимальная сумма
          {!!minValue && (
            <>
              {" "}
              не должна быть меньше{" "}
              <span
                style={{
                  color: "var(--color-red)",
                  fontFamily: "var(--font-medium)",
                }}
              >
                {minValue}₽
              </span>{" "}
            </>
          )}
        </PriceFilterModal>
      )}
    </>
  );
};
export default withFilters(ModalPriceFilterToContainer);
