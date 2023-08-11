import { Button, Modal, Input, Text } from "@nextui-org/react";
import { useState } from "react";
import Axios from "axios";
import { DateTime } from "luxon";

export default function ModalUpdateUser({
  isOpen,
  onClose,
  module,
  setModule,
}) {
  const [moduleForm, setModuleForm] = useState(module);

  const onChangeField = (fieldName, value) => {
    console.log(value);
    setModuleForm((modalFormValue) => ({
      ...modalFormValue,
      [fieldName]: value,
    }));
  };

  const updateUser = () => {
    Axios.put(`http://localhost:3020/class/update/${module.id}`, {
      ...moduleForm,
    }).then((res) => {
      setModule((module) => ({ ...module, ...res.data[0] }));
      onClose();
    });
  };
  console.log(module);

  return (
    <>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={isOpen}
        onClose={onClose}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Update the class :
            <Text b size={18}>
              {" " + module.name}
            </Text>
            <Text>For : {module.level}</Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="black"
            size="lg"
            value={module.name}
            onChange={(e) => onChangeField("names", e.target.value)}
            contentLeft={""}
            aria-label="Name"
            label="Name"
          />
          <Input
            clearable
            bordered
            fullWidth
            color="black"
            size="lg"
            value={module.level}
            onChange={(e) => onChangeField("level", e.target.value)}
            contentLeft={""}
            aria-label="Level"
            label="Level"
          />
          <Input
            clearable
            type={"datetime-local"}
            bordered
            fullWidth
            color="black"
            size="lg"
            aria-label="Date"
            placeholder="Date"
            contentLeft={""}
            value={DateTime.fromISO(module.startDate).toISO().substring(0, 16)}
            onChange={(e) => onChangeField("startDate", e.target.value)}
            label="begin"
          />
          <Input
            clearable
            type={"datetime-local"}
            bordered
            fullWidth
            color="black"
            size="lg"
            aria-label="Date"
            placeholder="Date"
            value={DateTime.fromISO(module.endDate).toISO().substring(0, 16)}
            contentLeft={""}
            onChange={(e) => onChangeField("endDate", e.target.value)}
            label="end"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            flat
            style={{
              backgroundColor: "rgba(217, 217, 217, 100%)",
              color: "black",
            }}
            onPress={onClose}
          >
            Close
          </Button>
          <Button
            auto
            onPress={updateUser}
            style={{ backgroundColor: "rgba(0, 128, 0, 60%)", color: "black" }}
          >
            Update module
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
