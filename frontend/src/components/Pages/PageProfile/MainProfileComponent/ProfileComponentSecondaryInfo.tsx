import { ReactElement } from 'react';
import { CustomGrid, CustomGridItem } from '../../../Common/CustomStyleComponents';

function ProfileComponentSecondaryInfo(): ReactElement {
  return (
    <CustomGrid
      sx={{
        maxWidth: 600,
        alignSelf: 'center',
        gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }
      }}
    >
      <CustomGridItem variant="outlined">
        <b>Возраст:</b> 25
      </CustomGridItem>
      <CustomGridItem variant="outlined">
        <b>Семейное положение:</b> Не женат
      </CustomGridItem>
      <CustomGridItem variant="outlined">
        <b>Интересы:</b> Дота, Мейби Бейби, Программирование
      </CustomGridItem>
      <CustomGridItem variant="outlined">
        <b>Место работы:</b> Кассир Вкусно и Точка
      </CustomGridItem>
    </CustomGrid>
  );
}

export default ProfileComponentSecondaryInfo;
