import React, { useState } from "react";
import { Modal, Input, Button, Text } from "@nextui-org/react";
import Axios from "axios";
import { DateTime } from "luxon";
export default function AddModule({ isOpen, onClose }) {
  const [names, setNames] = useState("");
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState("");
  const [level, setLevel] = useState("");

  const [errorMsg, setErrorMSg] = useState(false);
  const addModule = () => {
    if (
      names === "" ||
      level === "" ||
      startDate === null ||
      endDate === null
    ) {
      setErrorMSg(true);
    } else {
      Axios.post("http://localhost:3020/class/create", {
        names: names,
        startDate: DateTime.fromISO(startDate).toISO(),
        endDate: DateTime.fromISO(endDate).toISO(),
        level: level,
      }).then(() => {});
    }
  };

  return (
    <>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={isOpen}
        onClose={onClose}
      >
        <Modal.Header className="flex flex-col">
          <Text id="modal-title" size={18}>
            Add a module
          </Text>
          {errorMsg && (
            <Text size={15} color="error">
              Enter correct value
            </Text>
          )}
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            aria-label="Name"
            placeholder="Intervenant name's"
            contentLeft={""}
            onChange={(e) => setNames(e.target.value)}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            aria-label="Level"
            placeholder="Level"
            contentLeft={""}
            onChange={(e) => setLevel(e.target.value)}
          />
          <Input
            clearable
            type={"datetime-local"}
            bordered
            fullWidth
            color="primary"
            size="lg"
            aria-label="Date"
            placeholder="Date"
            contentLeft={""}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <Input
            clearable
            type={"datetime-local"}
            bordered
            fullWidth
            color="primary"
            size="lg"
            aria-label="Date"
            placeholder="Date"
            contentLeft={""}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
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
            flat
            style={{ backgroundColor: "rgba(0, 128, 0, 60%)", color: "black" }}
            onPress={addModule}
          >
            Add a module
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
