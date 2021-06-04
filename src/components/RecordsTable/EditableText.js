import { Editable, EditableInput, EditablePreview } from '@chakra-ui/react';
import PropTypes from 'prop-types';
function EditableText({ value, handler }) {
  return (
    <Editable
      defaultValue={value}
      className="flex gap-2 items-center text-yellow-600"
    >
      <EditablePreview />
      <EditableInput size="xs" onChange={handler} onBlur={handler} />
    </Editable>
  );
}
EditableText.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handler: PropTypes.func.isRequired,
};
export default EditableText;