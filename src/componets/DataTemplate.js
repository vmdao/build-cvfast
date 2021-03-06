export default [
    {
        theme: "Brandgos Theme CV",
        css: "agos",
        layout: {
            "type": "div",
            "props": {
                "className": "cv-content"
            },
            "children": [{
                "type": "div",
                "props": {
                    "className": "contact-spacer"
                },
                "children": [{
                    "type": "div",
                    "props": {
                        "className": "spacer-stripe"
                    },
                    "children": []
                }]
            },
            {
                "type": "section",
                "props": {
                    "data-field": "profile"
                },
                "children": [{
                    "type": "article",
                    "props": {
                        "className": "vcard",
                        "data-field": "content"
                    },
                    "children": [{
                        "type": "div",
                        "props": {
                            "className": "logo"
                        },
                        "children": [{
                            "type": "div",
                            "props": {
                                "className": "css-crop bg-contain"
                            },
                            "children": []
                        }]
                    },
                    {
                        "type": "div",
                        "props": {
                            "className": "fn user-title"
                        },
                        "children": [{
                            "type": "h1",
                            "props": {
                                "className": "full-name",
                                "data-field": "full_name",
                            },
                            "children": []
                        },
                        {
                            "type": "h2",
                            "props": {
                                "className": "title",
                                "data-field": "headline"
                            },
                            "children": []
                        }
                        ]
                    }
                    ]
                }]
            },
            {
                "type": "div",
                "props": {
                    "className": "column-container"
                },
                "children": [{
                    "type": "div",
                    "props": {
                        "className": "sidebar"
                    },
                    "children": [{
                        "type": "section",
                        "props": {
                            "data-field": "profile_sidebar",
                            "className": "nomargin vcard"
                        },
                        "children": [{
                            "type": "article",
                            "props": {
                                "className": "contact_info",
                                "data-field": "content"
                            },
                            "children": [{
                                "type": "div",
                                "props": {
                                    "className": "user-thumbnail"
                                },
                                "children": [{
                                    "type": "div",
                                    "props": {
                                        "className": "thumbnail-overlay"
                                    },
                                    "children": []
                                },
                                {
                                    "type": "div",
                                    "props": {
                                        "className": "user-thumb photo",
                                        "data-field": "thumb"
                                    },
                                    "children": []
                                },
                                {
                                    "type": "div",
                                    "props": {
                                        "className": "spacer-stripe"
                                    },
                                    "children": []
                                }
                                ]
                            }, {
                                "type": "div",
                                "props": {},
                                "children": [{
                                    "type": "div",
                                    "props": {
                                        "className": "adr"
                                    },
                                    "children": [{
                                        "type": "ul",
                                        "props": {
                                            "className": "user-contact"
                                        },
                                        "children": [{
                                            "type": "li",
                                            "props": {
                                                "className": "adr locality",
                                                "data-field": "location"
                                            },
                                            "children": []
                                        }, {
                                            "type": "li",
                                            "props": {
                                                "className": "phone",
                                                "data-field": "phone"
                                            },
                                            "children": []
                                        }, {
                                            "type": "li",
                                            "props": {
                                                "className": "email",
                                                "data-field": "email"
                                            },
                                            "children": []
                                        }]
                                    }, {
                                        "type": "ul",
                                        "props": {
                                            "className": "user-links user-websites",
                                            "data-field": "websites"
                                        },
                                        "children": []
                                    }]
                                }]
                            }]
                        }]
                    },
                    {
                        "type": "section",
                        "props": {
                            "data-field": "sidebar_sections",
                            "className": "text-section"
                        },
                        "children": []
                    }, {
                        "type": "div",
                        "props": {
                            "data-field": "add-sidebar-section-btn"
                        },
                        "children": []
                    }
                    ]
                },
                {
                    "type": "div",
                    "props": {
                        "className": "main"
                    },
                    "children": [{
                        "type": "div",
                        "props": {
                            "data-field": "sections"
                        },
                        "children": []
                    },
                    {
                        "type": "div",
                        "props": {
                            "data-field": "add-section-btn"
                        },
                        "children": []
                    }
                    ]
                }
                ]
            }
            ]
        },
        templates: [
            {
                "type": "section",
                "props": {
                    "id": "dated_story"
                },
                "children": [{
                    "type": "header",
                    "props": {},
                    "children": [{
                        "type": "h3",
                        "props": {
                            "className": "header-text",
                            "data-field": "label"
                        },
                        "children": []
                    }]
                },
                {
                    "type": "article",
                    "props": {
                        "data-field": "contents"
                    },
                    "children": [{
                        "type": "div",
                        "props": {
                            "className": "article-headings"
                        },
                        "children": [{
                            "type": "h6",
                            "props": {
                                "className": "date-range"
                            },
                            "children": [{
                                "type": "span",
                                "props": {
                                    "data-field": "start_date"
                                },
                                "children": []
                            },
                            {
                                "type": "span",
                                "props": {
                                    "data-field": "end_date"
                                },
                                "children": []
                            }
                            ]
                        }]
                    }, {
                        "type": "div",
                        "props": {
                            "className": "article-body"
                        },
                        "children": [{
                            "type": "h4",
                            "props": {
                                "data-field": "title"
                            },
                            "children": []
                        }, {
                            "type": "div",
                            "props": {
                                "data-field": "organization_url",
                                "target": "_blank",
                                "rel": "nofollow"
                            },
                            "children": [{
                                "type": "h5",
                                "props": {
                                    "data-field": "organization"
                                },
                                "children": []
                            }]
                        }, {
                            "type": "p",
                            "props": {
                                "data-field": "description"
                            },
                            "children": []
                        }]
                    }]
                }
                ]
            }, {
                "type": "section",
                "props": {
                    "id": "strengths"
                },
                "children": [{
                    "type": "header",
                    "props": {},
                    "children": [{
                        "type": "h3",
                        "props": {
                            "className": "header-text",
                            "data-field": "label"
                        },
                        "children": []
                    }]
                },
                {
                    "type": "article",
                    "props": {
                        "className": "competency",
                        "data-field": "contents"
                    },
                    "children": [{
                        "type": "div",
                        "props": {
                            "className": "article-body competency"
                        },
                        "children": [{
                            "type": "div",
                            "props": {
                                "data-field": "level",
                                "data-type": "dial"
                            },
                            "children": []
                        }, {
                            "type": "h6",
                            "props": {
                                "data-field": "name"
                            },
                            "children": []
                        }, {
                            "type": "p",
                            "props": {
                                "className": "competency-description",
                                "data-field": "description"
                            },
                            "children": []
                        }]
                    },
                    {
                        "type": "div",
                        "props": {
                            "className": "clearfix"
                        },
                        "children": []
                    }
                    ]
                }
                ]
            }, {
                "type": "section",
                "props": {
                    "id": "portfolio"
                },
                "children": [{
                    "type": "header",
                    "props": {},
                    "children": [{
                        "type": "h3",
                        "props": {
                            "className": "header-text",
                            "data-field": "label"
                        },
                        "children": []
                    }]
                },
                {
                    "type": "article",
                    "props": {
                        "className": "portfolio",
                        "data-field": "content"
                    },
                    "children": [{
                        "type": "div",
                        "props": {
                            "data-field": "description"
                        },
                        "children": [{
                            "type": "p",
                            "props": {},
                            "children": ["PortfolioDescription"]
                        }]
                    },
                    {
                        "type": "div",
                        "props": {
                            "className": "row gallery"
                        },
                        "children": [{
                            "type": "div",
                            "props": {
                                "className": "asset col-sm-4",
                                "data-field": "assets"
                            },
                            "children": [{
                                "type": "a",
                                "props": {
                                    "className": "asset-thumb",
                                    "data-field": "file_url",
                                    "target": "_blank"
                                },
                                "children": [{
                                    "type": "div",
                                    "props": {
                                        "className": "asset-overlay"
                                    },
                                    "children": []
                                }, {
                                    "type": "div",
                                    "props": {
                                        "className": "css-crop bg-cover"
                                    },
                                    "children": []
                                }]
                            }, {
                                "type": "div",
                                "props": {
                                    "target": "_blank",
                                    "rel": "nofollow",
                                    "data-field": "link_url"
                                },
                                "children": [{
                                    "type": "label",
                                    "props": {
                                        "className": "text-center ellipsis",
                                        "data-field": "title"
                                    },
                                    "children": []
                                }]
                            }]
                        }]
                    }
                    ]
                }
                ]
            }, {
                "type": "section",
                "props": {
                    "id": "text_story"
                },
                "children": [{
                    "type": "header",
                    "props": {},
                    "children": [{
                        "type": "h3",
                        "props": {
                            "className": "header-text",
                            "data-field": "label"
                        },
                        "children": []
                    }]
                },
                {
                    "type": "article",
                    "props": {
                        "data-field": "content"
                    },
                    "children": [{
                        "type": "p",
                        "props": {
                            "data-field": "description"
                        },
                        "children": []
                    }]
                }
                ]
            }, {
                "type": "section",
                "props": {
                    "id": "chart"
                },
                "children": [{
                    "type": "header",
                    "props": {},
                    "children": [{
                        "type": "h3",
                        "props": {
                            "className": "header-text",
                            "data-field": "label"
                        },
                        "children": []
                    }]
                },
                {
                    "type": "article",
                    "props": {
                        "className": "chart",
                        "data-field": "content"
                    },
                    "children": [{
                        "type": "div",
                        "props": {
                            "className": "article-headings"
                        },
                        "children": [{
                            "type": "h4",
                            "props": {
                                "data-field": "title"
                            },
                            "children": []
                        }]
                    },
                    {
                        "type": "div",
                        "props": {
                            "className": "article-body"
                        },
                        "children": [{
                            "type": "p",
                            "props": {
                                "data-field": "description"
                            },
                            "children": []
                        },
                        {
                            "type": "div",
                            "props": {
                                "className": "chart-graph",
                                "data-field": "chart"
                            },
                            "children": []
                        }
                        ]
                    },
                    {
                        "type": "div",
                        "props": {
                            "className": "clearfix"
                        },
                        "children": []
                    }
                    ]
                }
                ]
            }]
    },
    {
        theme: "Selii theme CV",
        css: "selii",
        layout: {
            "type": "div",
            "props": {
                "className": "cv-content"
            },
            "children": [
                {
                    "type": "section",
                    "props": {
                        "id": "profile"
                    },
                    "children": [{
                        "type": "article",
                        "props": {
                            "className": "vcard",
                            "data-field": "content"
                        },
                        "children": [{
                            "type": "div",
                            "props": {
                                "className": "article-headings"
                            },
                            "children": [{
                                "type": "div",
                                "props": {
                                    "className": "user-thumb",
                                    "data-field": "thumb"
                                },
                                "children": [{
                                    "type": "div",
                                    "props": {
                                        "className": "css-crop bg-cover"
                                    },
                                    "children": []
                                }]
                            }]
                        },
                        {
                            "type": "div",
                            "props": {
                                "className": "article-body"
                            },
                            "children": [{
                                "type": "div",
                                "props": {
                                    "className": "fn user-title"
                                },
                                "children": [{
                                    "type": "h1",
                                    "props": {
                                        "className": "full-name",
                                        "data-field": "full_name"
                                    },
                                    "children": []
                                },
                                {
                                    "type": "h2",
                                    "props": {
                                        "className": "title",
                                        "data-field": "headline"
                                    },
                                    "children": []
                                }
                                ]
                            },
                            {
                                "type": "div",
                                "props": {
                                    "className": "user-info"
                                },
                                "children": [{
                                    "type": "ul",
                                    "props": {
                                        "className": "user-contact"
                                    },
                                    "children": [{
                                        "type": "li",
                                        "props": {
                                            "className": "adr locality",
                                            "data-field": "location"
                                        },
                                        "children": []
                                    }, {
                                        "type": "li",
                                        "props": {
                                            "className": "phone",
                                            "data-field": "phone"
                                        },
                                        "children": []
                                    }, {
                                        "type": "li",
                                        "props": {
                                            "className": "email",
                                            "data-field": "email"
                                        },
                                        "children": []
                                    }]
                                }, {
                                    "type": "ul",
                                    "props": {
                                        "className": "user-links user-websites",
                                        "data-field": "websites"
                                    },
                                    "children": []
                                }]
                            }
                            ]
                        }
                        ]
                    }]
                }, {
                    "type": "div",
                    "props": {
                        "data-field": "sections"
                    },
                    "children": []
                }, {
                    "type": "div",
                    "props": {
                        "data-field": "add-section-btn"
                    },
                    "children": []
                }]
        },
        templates: [
            {
                "type": "section",
                "props": {
                    "id": "dated_story"
                },
                "children": [{
                    "type": "header",
                    "props": {},
                    "children": [{
                        "type": "h3",
                        "props": {
                            "className": "header-text",
                            "data-field": "label"
                        },
                        "children": []
                    },
                    {
                        "type": "div",
                        "props": {
                            "className": "header-separator"
                        },
                        "children": []
                    }
                    ]
                },
                {
                    "type": "article",
                    "props": {
                        "data-field": "contents"
                    },
                    "children": [{
                        "type": "div",
                        "props": {
                            "className": "article-headings"
                        },
                        "children": [{
                            "type": "div",
                            "props": {
                                "data-field": "organization_url",
                                "target": "_blank",
                                "rel": "nofollow"
                            },
                            "children": [{
                                "type": "h5",
                                "props": {
                                    "data-field": "organization"
                                },
                                "children": []
                            }]
                        }, {
                            "type": "h6",
                            "props": {
                                "className": "date-range"
                            },
                            "children": [{
                                "type": "span",
                                "props": {
                                    "data-field": "start_date"
                                },
                                "children": []
                            }, {
                                "type": "span",
                                "props": {
                                    "data-field": "end_date"
                                },
                                "children": []
                            }]
                        }]
                    }, {
                        "type": "div",
                        "props": {
                            "className": "article-body"
                        },
                        "children": [{
                            "type": "h4",
                            "props": {
                                "className": "title-text",
                                "data-field": "title"
                            },
                            "children": []
                        }, {
                            "type": "p",
                            "props": {
                                "data-field": "description"
                            },
                            "children": []
                        }]
                    }]
                }]
            },
            {
                "type": "section",
                "props": {
                    "id": "strengths"
                },
                "children": [{
                    "type": "header",
                    "props": {},
                    "children": [{
                        "type": "h3",
                        "props": {
                            "className": "header-text",
                            "data-field": "label"
                        },
                        "children": []
                    }, {
                        "type": "div",
                        "props": {
                            "className": "header-separator"
                        },
                        "children": []
                    }]
                }, {
                    "type": "article",
                    "props": {
                        "className": "skill-container",
                        "data-field": "contents"
                    },
                    "children": [{
                        "type": "div",
                        "props": {
                            "className": "competency"
                        },
                        "children": [{
                            "type": "div",
                            "props": {
                                "className": "article-headings"
                            },
                            "children": [{
                                "type": "h6",
                                "props": {
                                    "data-field": "name"
                                },
                                "children": []
                            }]
                        }, {
                            "type": "div",
                            "props": {
                                "className": "article-body competency"
                            },
                            "children": [{
                                "type": "div",
                                "props": {
                                    "data-field": "level",
                                    "data-type": "list"

                                },
                                "children": []
                            }, {
                                "type": "p",
                                "props": {
                                    "data-field": "description"
                                },
                                "children": []
                            }]
                        }]
                    }]
                }]
            }, {
                "type": "section",
                "props": {
                    "id": "portfolio"
                },
                "children": [{
                    "type": "header",
                    "props": {},
                    "children": [{
                        "type": "h3",
                        "props": {
                            "className": "header-text",
                            "data-field": "label"
                        },
                        "children": []
                    }, {
                        "type": "div",
                        "props": {
                            "className": "header-separator"
                        },
                        "children": []
                    }]
                }, {
                    "type": "article",
                    "props": {
                        "className": "portfolio",
                        "data-field": "content"
                    },
                    "children": [{
                        "type": "div",
                        "props": {
                            "className": "article-headings"
                        },
                        "children": [{
                            "type": "div",
                            "props": {
                                "data-field": "description"
                            },
                            "children": [{
                                "type": "p",
                                "props": {},
                                "children": ["PortfolioDescription"]
                            }]
                        }]
                    }, {
                        "type": "div",
                        "props": {
                            "className": "article-body"
                        },
                        "children": [{
                            "type": "div",
                            "props": {
                                "className": "row gallery"
                            },
                            "children": [{
                                "type": "div",
                                "props": {
                                    "className": "asset col-sm-6",
                                    "data-field": "assets"
                                },
                                "children": [{
                                    "type": "a",
                                    "props": {
                                        "className": "asset-thumb",
                                        "data-field": "file_url",
                                        "target": "_blank"
                                    },
                                    "children": [{
                                        "type": "div",
                                        "props": {
                                            "className": "asset-overlay"
                                        },
                                        "children": []
                                    }, {
                                        "type": "div",
                                        "props": {
                                            "className": "css-crop bg-cover"
                                        },
                                        "children": []
                                    }]
                                }, {
                                    "type": "div",
                                    "props": {
                                        "target": "_blank",
                                        "rel": "nofollow",
                                        "data-field": "link_url"
                                    },
                                    "children": [{
                                        "type": "label",
                                        "props": {
                                            "className": "text-center ellipsis",
                                            "data-field": "title"
                                        },
                                        "children": []
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }, {
                "type": "section",
                "props": {
                    "id": "text_story"
                },
                "children": [{
                    "type": "header",
                    "props": {},
                    "children": [{
                        "type": "h3",
                        "props": {
                            "className": "header-text",
                            "data-field": "label"
                        },
                        "children": []
                    }, {
                        "type": "div",
                        "props": {
                            "className": "header-separator"
                        },
                        "children": []
                    }]
                }, {
                    "type": "article",
                    "props": {},
                    "children": [{
                        "type": "div",
                        "props": {
                            "className": "article-headings"
                        },
                        "children": []
                    }, {
                        "type": "div",
                        "props": {
                            "className": "article-body"
                        },
                        "children": [{
                            "type": "div",
                            "props": {
                                "data-field": "content"
                            },
                            "children": [{
                                "type": "p",
                                "props": {
                                    "data-field": "description"
                                },
                                "children": []
                            }]
                        }]
                    }]
                }]
            }, {
                "type": "section",
                "props": {
                    "id": "chart"
                },
                "children": [{
                    "type": "header",
                    "props": {},
                    "children": [{
                        "type": "h3",
                        "props": {
                            "className": "header-text",
                            "data-field": "label"
                        },
                        "children": []
                    }, {
                        "type": "div",
                        "props": {
                            "className": "header-separator"
                        },
                        "children": []
                    }]
                }, {
                    "type": "article",
                    "props": {
                        "className": "chart",
                        "data-field": "content"
                    },
                    "children": [{
                        "type": "div",
                        "props": {
                            "className": "article-headings"
                        },
                        "children": [{
                            "type": "p",
                            "props": {
                                "data-field": "description"
                            },
                            "children": []
                        }]
                    }, {
                        "type": "div",
                        "props": {
                            "className": "article-body"
                        },
                        "children": [{
                            "type": "div",
                            "props": {
                                "className": "chart-graph",
                                "data-field": "chart"
                            },
                            "children": []
                        }]
                    }]
                }]
            }]
    }, {
        theme: "Colachopo in Brandgos",
        css: 'cola',
        layout: {
            "type": "div",
            "props": {
                "className": "cv-content"
            },
            "children": [{
                "type": "div",
                "props": {
                    "data-field": "sections"
                },
                "children": []
            }, {
                "type": "div",
                "props": {
                    "data-field": "add-section-btn"
                },
                "children": []
            }]
        },
        templates: [
            {
                "type": "section",
                "props": {
                    "id": "profile"
                },
                "children": [{
                    "type": "article",
                    "props": {
                        "className": "vcard",
                        "data-field": "content"
                    },
                    "children": [{
                        "type": "ul",
                        "props": {
                            "className": "user-contact"
                        },
                        "children": [{
                            "type": "li",
                            "props": {
                                "className": "adr locality",
                                "data-field": "location"
                            },
                            "children": []
                        }, {
                            "type": "li",
                            "props": {
                                "className": "phone",
                                "data-field": "phone"
                            },
                            "children": []
                        }, {
                            "type": "li",
                            "props": {
                                "className": "email",
                                "data-field": "email"
                            },
                            "children": []
                        }, {
                            "type": "ul",
                            "props": {
                                "className": "user-links user-websites",
                                "data-field": "websites"
                            },
                            "children": []
                        }]
                    }, {
                        "type": "div",
                        "props": {
                            "className": "fn user-title"
                        },
                        "children": [{
                            "type": "div",
                            "props": {
                                "className": "user-thumb",
                                "data-field": "thumb"
                            },
                            "children": [{
                                "type": "div",
                                "props": {
                                    "className": "css-crop bg-cover"
                                },
                                "children": []
                            }]
                        }, {
                            "type": "h1",
                            "props": {
                                "className": "full-name",
                                "data-field": "full_name"
                            },
                            "children": []
                        }, {
                            "type": "h2",
                            "props": {
                                "className": "title",
                                "data-field": "headline"
                            },
                            "children": []
                        }]
                    }]
                }]
            }, {
                "type": "section",
                "props": {
                    "id": "dated_story"
                },
                "children": [{
                    "type": "header",
                    "props": {},
                    "children": [{
                        "type": "h3",
                        "props": {
                            "className": "header-text",
                            "data-field": "label"
                        },
                        "children": []
                    }]
                }, {
                    "type": "article",
                    "props": {
                        "data-field": "contents"
                    },
                    "children": [{
                        "type": "div",
                        "props": {
                            "className": "article-headings"
                        },
                        "children": [{
                            "type": "div",
                            "props": {
                                "className": "ribbon"
                            },
                            "children": [{
                                "type": "div",
                                "props": {
                                    "data-field": "organization_url",
                                    "target": "_blank",
                                    "rel": "nofollow"
                                },
                                "children": [{
                                    "type": "h4",
                                    "props": {
                                        "data-field": "organization"
                                    },
                                    "children": []
                                }]
                            }]
                        }, {
                            "type": "h5",
                            "props": {
                                "className": "date-range"
                            },
                            "children": [{
                                "type": "span",
                                "props": {
                                    "data-field": "start_date"
                                },
                                "children": []
                            }, {
                                "type": "span",
                                "props": {
                                    "data-field": "end_date"
                                },
                                "children": []
                            }]
                        }]
                    }, {
                        "type": "div",
                        "props": {
                            "className": "article-body"
                        },
                        "children": [{
                            "type": "h4",
                            "props": {
                                "data-field": "title"
                            },
                            "children": []
                        }, {
                            "type": "p",
                            "props": {
                                "data-field": "description"
                            },
                            "children": []
                        }]
                    }, {
                        "type": "div",
                        "props": {
                            "className": "clearfix"
                        },
                        "children": []
                    }]
                }]
            }, {
                "type": "section",
                "props": {
                    "id": "strengths"
                },
                "children": [{
                    "type": "header",
                    "props": {},
                    "children": [{
                        "type": "h3",
                        "props": {
                            "className": "header-text",
                            "data-field": "label"
                        },
                        "children": []
                    }]
                }, false, {
                    "type": "div",
                    "props": {},
                    "children": [{
                        "type": "article",
                        "props": {
                            "className": "competency",
                            "data-field": "contents"
                        },
                        "children": [{
                            "type": "div",
                            "props": {
                                "className": "article-headings"
                            },
                            "children": []
                        }, {
                            "type": "div",
                            "props": {
                                "className": "article-body competency"
                            },
                            "children": [{
                                "type": "div",
                                "props": {
                                    "className": "competency-bar"
                                },
                                "children": [{
                                    "type": "div",
                                    "props": {
                                        "className": "competency-level",
                                        "data-field": "level",
                                        "data-type": "bar"
                                    },
                                    "children": []
                                }]
                            }, {
                                "type": "h6",
                                "props": {
                                    "data-field": "name"
                                },
                                "children": []
                            }, {
                                "type": "p",
                                "props": {
                                    "data-field": "description"
                                },
                                "children": []
                            }]
                        }]
                    }]
                }, {
                    "type": "div",
                    "props": {
                        "className": "clearfix"
                    },
                    "children": []
                }]
            }, {
                "type": "section",
                "props": {
                    "id": "portfolio"
                },
                "children": [{
                    "type": "header",
                    "props": {},
                    "children": [{
                        "type": "h3",
                        "props": {
                            "className": "header-text",
                            "data-field": "label"
                        },
                        "children": []
                    }]
                }, {
                    "type": "article",
                    "props": {
                        "className": "portfolio",
                        "data-field": "content"
                    },
                    "children": [{
                        "type": "div",
                        "props": {
                            "className": "article-headings"
                        },
                        "children": []
                    }, {
                        "type": "div",
                        "props": {
                            "className": "article-body"
                        },
                        "children": [{
                            "type": "div",
                            "props": {
                                "data-field": "description"
                            },
                            "children": [{
                                "type": "p",
                                "props": {},
                                "children": ["PortfolioDescription"]
                            }]
                        }, {
                            "type": "div",
                            "props": {
                                "className": "row gallery"
                            },
                            "children": [{
                                "type": "div",
                                "props": {
                                    "className": "asset col-sm-4",
                                    "data-field": "assets"
                                },
                                "children": [{
                                    "type": "a",
                                    "props": {
                                        "className": "asset-thumb",
                                        "data-field": "file_url",
                                        "target": "_blank"
                                    },
                                    "children": [{
                                        "type": "div",
                                        "props": {
                                            "className": "asset-overlay"
                                        },
                                        "children": []
                                    }, {
                                        "type": "div",
                                        "props": {
                                            "className": "css-crop bg-cover"
                                        },
                                        "children": []
                                    }]
                                }, {
                                    "type": "div",
                                    "props": {
                                        "target": "_blank",
                                        "rel": "nofollow",
                                        "data-field": "link_url"
                                    },
                                    "children": [{
                                        "type": "label",
                                        "props": {
                                            "className": "text-center ellipsis",
                                            "data-field": "title"
                                        },
                                        "children": []
                                    }]
                                }]
                            }]
                        }]
                    }]
                }]
            }, {
                "type": "section",
                "props": {
                    "id": "text_story"
                },
                "children": [{
                    "type": "header",
                    "props": {},
                    "children": [{
                        "type": "h3",
                        "props": {
                            "className": "header-text",
                            "data-field": "label"
                        },
                        "children": []
                    }]
                }, {
                    "type": "article",
                    "props": {
                        "className": "article-body",
                        "data-field": "content"
                    },
                    "children": [{
                        "type": "p",
                        "props": {
                            "data-field": "description"
                        },
                        "children": []
                    }]
                }]
            }, {
                "type": "section",
                "props": {
                    "id": "chart"
                },
                "children": [{
                    "type": "header",
                    "props": {},
                    "children": [{
                        "type": "h3",
                        "props": {
                            "className": "header-text",
                            "data-field": "label"
                        },
                        "children": []
                    }]
                }, {
                    "type": "article",
                    "props": {
                        "className": "chart",
                        "data-field": "content"
                    },
                    "children": [{
                        "type": "div",
                        "props": {
                            "className": "article-headings"
                        },
                        "children": [{
                            "type": "div",
                            "props": {
                                "className": "ribbon"
                            },
                            "children": [{
                                "type": "h4",
                                "props": {
                                    "data-field": "title"
                                },
                                "children": []
                            }]
                        }]
                    }, {
                        "type": "div",
                        "props": {
                            "className": "article-body"
                        },
                        "children": [{
                            "type": "p",
                            "props": {
                                "data-field": "description"
                            },
                            "children": []
                        }, {
                            "type": "div",
                            "props": {
                                "className": "chart-graph",
                                "data-field": "chart"
                            },
                            "children": []
                        }]
                    }, {
                        "type": "div",
                        "props": {
                            "className": "clearfix"
                        },
                        "children": []
                    }]
                }]
            }]
    }
]