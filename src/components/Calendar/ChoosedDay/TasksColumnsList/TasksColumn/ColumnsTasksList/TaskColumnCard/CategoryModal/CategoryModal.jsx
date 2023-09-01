import { CategoriesList, ModalWrapper } from './CategoryModal.styled';

export const CategoryModal = ({ children, propList }) => {
  return (
    <ModalWrapper>
      <CategoriesList list={propList}>{children}</CategoriesList>
    </ModalWrapper>
  );
};
