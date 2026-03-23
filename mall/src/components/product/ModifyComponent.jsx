import { useState, useRef, useEffect } from "react";
import { API_SERVER_HOST } from "../../api/todoApi";
import FetchingModal from "../common/FetchingModal";
import { getOne, putOne, deleteOne } from "../../api/todoApi";
import InfoModal from "../common/InfoModal";
import useCustomMove from "../../hooks";
import "./ModifyComponent.css";

const initState = {
  pno: 0,
  pname: "",
  pdesc: "",
  price: 0,
  delFlag: false,
  uploadFileNames: [],
};
const host = API_SERVER_HOST;

const ModifyComponent = ({ pno }) => {
  // 1. 상태 선언 (State)
  const [product, setProduct] = useState({ ...initState });
  const [fetching, setFetching] = useState(false);
  const [result, setResult] = useState(null);
  const [infoModalOn, setInfoModalOn] = useState(false);

  // 2. 참조 및 커스텀 훅 (Refs & Hooks)
  const uploadRef = useRef();
  const { moveToProductRead, moveToProductList } = useCustomMove();

  // 3. 부수 효과 (Effects) - 데이터 초기 로딩
  useEffect(() => {
    getOne(pno)
      .then((data) => {
        setProduct(data);
        setFetching(false); // 데이터 로딩이 완료되면 false로 변경
      })
      .catch((err) => {
        setFetching(false);
      });
  }, [pno]);

  // 4. 핸들러 함수들 (Handlers)
  const handleChangeProduct = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const deleteOldImages = (imageName) => {
    const resultNames = product.uploadFileNames.filter(
      (name) => name !== imageName,
    );
    setProduct({ ...product, uploadFileNames: resultNames });
  };

  const handleClickModify = () => {
    const formData = new FormData();
    const files = uploadRef.current.files;

    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    formData.append("pname", product.pname);
    formData.append("pdesc", product.pdesc);
    formData.append("price", product.price);
    formData.append("delFlag", product.delFlag);

    product.uploadFileNames.forEach((name) =>
      formData.append("uploadFileNames", name),
    );

    setFetching(true);
    putOne(pno, formData).then(() => {
      setResult("Modified");
      setInfoModalOn(true); // 수정 완료 메시지 노출
    });
  };

  const handleClickDelete = () => {
    setFetching(true);
    deleteOne(pno).then(() => {
      setResult("Deleted");
      setInfoModalOn(true); // 삭제 완료 메시지 노출
    });
  };

  const closeModal = () => {
    setInfoModalOn(false);
    if (result === "Modified") {
      moveToProductRead(pno); // 수정 후 상세 보기로 이동 (사용처 확보!)
    } else if (result === "Deleted") {
      moveToProductList({ page: 1 }); // 삭제 후 리스트로 이동
    }
    setResult(null);
  };

  return (
    <div className="modify-container">
      {fetching && <FetchingModal />}
      <InfoModal
        show={infoModalOn}
        title="알림"
        content={result}
        callbackFn={closeModal}
      />

      <div className="modify-form">
        {/* PNO는 수정 불가하므로 readOnly 처리 */}
        <div className="modify-form-group">
          <label className="modify-label">PNO</label>
          <input className="modify-control" value={product.pno} readOnly />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">PNAME</label>
          <input
            className="modify-control"
            name="pname"
            value={product.pname}
            onChange={handleChangeProduct}
          />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">PRICE</label>
          <input
            className="modify-control"
            name="price"
            type="number"
            value={product.price}
            onChange={handleChangeProduct}
          />
        </div>

        <div className="modify-form-group">
          <label className="modify-label">DESCRIPTION</label>
          <textarea
            className="modify-control"
            name="pdesc"
            rows={5}
            value={product.pdesc}
            onChange={handleChangeProduct}
          />
        </div>

        <div className="modify-image-grid">
          {product.uploadFileNames.map((imgFile, i) => (
            <div className="modify-image-card" key={i}>
              <button
                className="btn-img-delete"
                type="button"
                onClick={() => deleteOldImages(imgFile)}
              >
                DELETE
              </button>
              <img
                alt="product"
                src={`${host}/api/products/view/s_${imgFile}`}
              />
            </div>
          ))}
        </div>

        <div className="modify-button-group">
          <button
            className="btn-modify-action btn-del"
            type="button"
            onClick={handleClickDelete}
          >
            DELETE
          </button>
          <button
            className="btn-modify-action btn-mod"
            type="button"
            onClick={handleClickModify}
          >
            MODIFY
          </button>
          <button
            className="btn-modify-action btn-list"
            type="button"
            onClick={moveToProductList} // 2. 위에서 정의한 이름과 맞춤
          >
            LIST
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModifyComponent;
