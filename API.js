module.exports = {
    Calls: {

        Authorization: {

            header: "auth",
            request: {
                body: {
                    name: ":string:"
                }
            },

            response: {
                body: {
                    data: {
                        successful: ":string:",
                        unsuccessful: [
                            "badName"
                        ],
                        error: [
                            "invalidData"
                        ]
                    },
                    successful: true,
                    error: true
                }
            }
        },

        GetRooms: {

            header: "getrooms",

            request: {
                body: {
                    room: [
                        ":string:",
                        null
                    ]
                },
                desctiption: "Send string to get rooms by name. Send null to get all rooms."
            },

            response: {
                body: {
                    data: [
                        { room: ":string:", haspass: true }
                    ],
                    successful: true,
                    error: true
                },
                desctiption: "Returns array sorted by input string like."
            }

        },

        Chat: {

            header: "chat",
            request: {
                body: {
                    message: ":string:"
                }
            },

            response: {
                body: {
                    data: ":string:",
                    successful: true,
                    error: true
                }
            }
        },

        JoinRoom: {

            header: "joinroom",
            request: {
                body: {
                    name: ":string:",
                    password: [
                        ":string:",
                        null
                    ]
                }
            },

            response: {
                body: {
                    data: {
                        successful: {
                            message: ":string:",
                            room: ":string:"
                        },
                        unsuccessful: [
                            "invalidPass",
                            "roomNotFound"
                        ],
                        error: [
                            "invalidData"
                        ]
                    },
                    successful: true,
                    error: true
                }
            }
        },

        CreateRoom: {

            header: "createroom",
            request: {
                body: {
                    name: ":string:",
                    password: [
                        ":string:",
                        null
                    ]
                }
            },

            response: {
                body: {
                    data: {
                        successful: ":string:",
                        unsuccessful: [
                            "roomExists",
                            "badName"
                        ],
                        error: [
                            "invalidData"
                        ]
                    },
                    successful: true,
                    error: true
                }
            }
        },

    },

    ServerCalls: {

        Access: {
            header: "access",
            response: {
                body: {
                    data: {
                        successful: ":string:",
                        error: [
                            "notAuth"
                        ]
                    },
                    successful: true,
                    error: true
                }
            }
        },

        RoomChange: {
            header: "roomchange",
            response: {
                body: {
                    data: ":string:",
                    successful: true,
                    error: true
                }
            }

        }

    }

}