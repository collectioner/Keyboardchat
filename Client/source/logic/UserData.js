class Room {
  constructor(id, name, haspass) {
    this.id = id;
    this.name = name;
    this.haspass = haspass;
  }

  static fromJSON(json) {
    return new Room(
      json.id,
      json.room,
      json.haspass,
    );
  }

  compare(room) {
    return (this.id === room.id) && (this.name === room.name);
  }
}

class Message {
  constructor(author, content, roomId, date) {
    this.roomdId = roomId;
    this.author = author;
    this.content = content;
    this.date = date;
  }
}

export { Room, Message };

const UserData = {
  username: 'Hello world!',

  inRoom: new Room(undefined, 'globals'),
  setInRoomJSON(json) {
    this.inRoom = Room.fromJSON(json);
  },
  setInRoom(room) {
    this.inRoom = room;
  },

  existingRooms: {
    rooms: [],

    addRoomJSON(json) {
      this.rooms.push(Room.fromJSON(json));
    },

    setRoomsJSON(json) {
      console.log('json = ', json);
      this.rooms = json.data.map((room) => Room.fromJSON(room));
      console.log('this.rooms = ', this.rooms);
    },
  },

  cache: {
    rooms: [],
  },
};

export default UserData;
