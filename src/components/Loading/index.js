/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { useLoading, Puff } from '@agney/react-loading';
import Container from './styled';

export default function Loading({ isLoading }) {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Puff width="70" />,
  });
  if (!isLoading) return <></>;
  return (
    <Container>
      <div />
      <span>
        <section {...containerProps}>{indicatorEl}</section>
      </span>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
