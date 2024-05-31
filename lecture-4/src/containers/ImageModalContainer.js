import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import ImageModal from '../components/ImageModal';

function ImageModalContainer() {
  // const { modalVisible, bgColor, src, alt } = useSelector(state => ({
  //   modalVisible: state.imageModal.modalVisible,
  //   bgColor: state.imageModal.bgColor,
  //   src: state.imageModal.src,
  //   alt: state.imageModal.alt,
  // }));
  // 위 객체 리턴으로 인해 리렌더링 현상 떄문에 반환 값 나누는 작업.
  // const modalVisible = useSelector(state => state.imageModal.modalVisible);
  // const bgColor = useSelector(state => state.imageModal.bgColor);
  // const src = useSelector(state => state.imageModal.src);
  // const alt = useSelector(state => state.imageModal.alt);
  // Equality Function 사용. 객체를 얕은 비교를 통해 리렌더링 방지.
  const { modalVisible, bgColor, src, alt } = useSelector(
    state => ({
      modalVisible: state.imageModal.modalVisible,
      bgColor: state.imageModal.bgColor,
      src: state.imageModal.src,
      alt: state.imageModal.alt,
    }),
    shallowEqual
  );

  return (
    <ImageModal
      modalVisible={modalVisible}
      bgColor={bgColor}
      src={src}
      alt={alt}
    />
  );
}

export default ImageModalContainer;
