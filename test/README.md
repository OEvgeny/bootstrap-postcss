
> bootstrap-postcss@0.0.1 test /app
> mocha "./test/components.js" "./node_modules/mocha/lib/reporters/markdown.js"



  Bootstrap v4 PostCSS
    1) component: alert
    ✓ component: animation
    ✓ component: breadcrumb
    2) component: button-group
    ✓ component: buttons
    ✓ component: card
    ✓ component: carousel (46ms)
    ✓ component: close
    ✓ component: code
    ✓ component: custom-forms
    ✓ component: dropdown
    3) component: forms
    4) component: grid
    ✓ component: images
    5) component: input-group
    ✓ component: jumbotron
    ✓ component: labels
    ✓ component: list-group
    ✓ component: media
    ✓ component: modal
    ✓ component: nav
    ✓ component: navbar
    ✓ component: normalize
    ✓ component: pager
    ✓ component: pagination
    6) component: popover
    ✓ component: print
    ✓ component: progress
    ✓ component: reboot
    ✓ component: responsive-embed
    ✓ component: tables
    ✓ component: tooltip
    ✓ component: type
    ✓ component: utilities-responsive
    ✓ component: utilities-spacing
    ✓ component: utilities


  30 passing (515ms)
  6 failing

  1) Bootstrap v4 PostCSS component: alert:

      + expected - actual

                     "file": "alert.css"
                   }
                 },
                 "prop": "border-top-color",
      -          "value": "#c1e2b4"
      +          "value": "#c1e2b3"
               }
             ],
             "source": {
               "input": {
                     "file": "alert.css"
                   }
                 },
                 "prop": "border-top-color",
      -          "value": "#a7d5ed"
      +          "value": "#a6d5ec"
               }
             ],
             "source": {
               "input": {
                     "file": "alert.css"
                   }
                 },
                 "prop": "border-top-color",
      -          "value": "#f8ecb5"
      +          "value": "#f7ecb5"
               }
             ],
             "source": {
               "input": {
                     "file": "alert.css"
                   }
                 },
                 "prop": "border-top-color",
      -          "value": "#e4baba"
      +          "value": "#e4b9b9"
               }
             ],
             "source": {
               "input": {
      
      at Context.<anonymous> (test/components.js:23:30)

  2) Bootstrap v4 PostCSS component: button-group:

      + expected - actual

               "input": {
                 "file": "button-group.css"
               }
             },
      -      "selector": ".btn-group > .btn-lg + .dropdown-toggle"
      +      "selector": ".btn-group-lg.btn-group > .btn + .dropdown-toggle,\n.btn-group > .btn-lg + .dropdown-toggle"
           },
           {
             "raws": {
               "before": "\n\n",
               "input": {
                 "file": "button-group.css"
               }
             },
      -      "selector": ".btn-lg .caret"
      +      "selector": ".btn-group-lg > .btn .caret,\n.btn-lg .caret"
           },
           {
             "raws": {
               "before": "\n\n",
               "input": {
                 "file": "button-group.css"
               }
             },
      -      "selector": ".dropup .btn-lg .caret"
      +      "selector": ".dropup .btn-group-lg > .btn .caret,\n.dropup .btn-lg .caret"
           },
           {
             "raws": {
               "before": "\n\n",
      
      at Context.<anonymous> (test/components.js:23:30)

  3) Bootstrap v4 PostCSS component: forms:

      + expected - actual

                         "file": "forms.css"
                       }
                     },
                     "prop": "line-height",
      -              "value": "3.16666rem"
      +              "value": "3.16667rem"
                   }
                 ],
                 "source": {
                   "input": {
      
      at Context.<anonymous> (test/components.js:23:30)

  4) Bootstrap v4 PostCSS component: grid:

      + expected - actual

                   }
                 },
                 "prop": "margin-left",
                 "value": "auto"
      +        }
      +      ],
      +      "source": {
      +        "input": {
      +          "file": "grid.css"
      +        }
      +      },
      +      "selector": ".container,\n.container-fluid"
      +    },
      +    {
      +      "raws": {
      +        "before": "\n\n",
      +        "between": " ",
      +        "semicolon": true,
      +        "after": "\n"
      +      },
      +      "type": "rule",
      +      "nodes": [
      +        {
      +          "raws": {
      +            "before": "\n  ",
      +            "between": ": "
      +          },
      +          "type": "decl",
      +          "source": {
      +            "input": {
      +              "file": "grid.css"
      +            }
      +          },
      +          "prop": "content",
      +          "value": "\"\""
               },
               {
                 "raws": {
                   "before": "\n  ",
                   "input": {
                     "file": "grid.css"
                   }
                 },
      -          "prop": "padding-left",
      -          "value": ".9375rem"
      +          "prop": "display",
      +          "value": "table"
               },
               {
                 "raws": {
                   "before": "\n  ",
                   "input": {
                     "file": "grid.css"
                   }
                 },
      -          "prop": "padding-right",
      -          "value": ".9375rem"
      +          "prop": "clear",
      +          "value": "both"
               }
             ],
             "source": {
               "input": {
                 "file": "grid.css"
               }
             },
      -      "selector": ".container,\n.container-fluid"
      +      "selector": ".container-fluid::after,\n.container::after,\n.row::after"
           },
           {
             "raws": {
               "before": "\n\n",
                   "input": {
                     "file": "grid.css"
                   }
                 },
      -          "prop": "margin-left",
      -          "value": "-.9375rem"
      +          "prop": "padding-left",
      +          "value": ".9375rem"
               },
               {
                 "raws": {
                   "before": "\n  ",
                   "input": {
                     "file": "grid.css"
                   }
                 },
      -          "prop": "margin-right",
      -          "value": "-.9375rem"
      +          "prop": "padding-right",
      +          "value": ".9375rem"
               }
             ],
             "source": {
               "input": {
                 "file": "grid.css"
               }
             },
      -      "selector": ".row"
      +      "selector": ".container,\n.container-fluid"
           },
           {
             "raws": {
               "before": "\n\n",
                   "input": {
                     "file": "grid.css"
                   }
                 },
      -          "prop": "content",
      -          "value": "\"\""
      +          "prop": "margin-left",
      +          "value": "-.9375rem"
               },
               {
                 "raws": {
                   "before": "\n  ",
                   "input": {
                     "file": "grid.css"
                   }
                 },
      -          "prop": "display",
      -          "value": "table"
      -        },
      -        {
      -          "raws": {
      -            "before": "\n  ",
      -            "between": ": "
      -          },
      -          "type": "decl",
      -          "source": {
      -            "input": {
      -              "file": "grid.css"
      -            }
      -          },
      -          "prop": "clear",
      -          "value": "both"
      +          "prop": "margin-right",
      +          "value": "-.9375rem"
               }
             ],
             "source": {
               "input": {
                 "file": "grid.css"
               }
             },
      -      "selector": ".row::after"
      +      "selector": ".row"
           },
           {
             "raws": {
               "before": "\n\n",
                   "input": {
                     "file": "grid.css"
                   }
                 },
      +          "prop": "float",
      +          "value": "left"
      +        }
      +      ],
      +      "source": {
      +        "input": {
      +          "file": "grid.css"
      +        }
      +      },
      +      "selector": ".col-xs-1,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9"
      +    },
      +    {
      +      "raws": {
      +        "before": "\n\n",
      +        "between": " ",
      +        "semicolon": true,
      +        "after": "\n"
      +      },
      +      "type": "rule",
      +      "nodes": [
      +        {
      +          "raws": {
      +            "before": "\n  ",
      +            "between": ": "
      +          },
      +          "type": "decl",
      +          "source": {
      +            "input": {
      +              "file": "grid.css"
      +            }
      +          },
                 "prop": "width",
                 "value": "8.33333%"
               }
             ],
                       "input": {
                         "file": "grid.css"
                       }
                     },
      +              "prop": "float",
      +              "value": "left"
      +            }
      +          ],
      +          "source": {
      +            "input": {
      +              "file": "grid.css"
      +            }
      +          },
      +          "selector": ".col-sm-1,\n  .col-sm-10,\n  .col-sm-11,\n  .col-sm-12,\n  .col-sm-2,\n  .col-sm-3,\n  .col-sm-4,\n  .col-sm-5,\n  .col-sm-6,\n  .col-sm-7,\n  .col-sm-8,\n  .col-sm-9"
      +        },
      +        {
      +          "raws": {
      +            "before": "\n\n  ",
      +            "between": " ",
      +            "semicolon": true,
      +            "after": "\n  "
      +          },
      +          "type": "rule",
      +          "nodes": [
      +            {
      +              "raws": {
      +                "before": "\n    ",
      +                "between": ": "
      +              },
      +              "type": "decl",
      +              "source": {
      +                "input": {
      +                  "file": "grid.css"
      +                }
      +              },
                     "prop": "width",
                     "value": "8.33333%"
                   }
                 ],
                       "input": {
                         "file": "grid.css"
                       }
                     },
      +              "prop": "float",
      +              "value": "left"
      +            }
      +          ],
      +          "source": {
      +            "input": {
      +              "file": "grid.css"
      +            }
      +          },
      +          "selector": ".col-md-1,\n  .col-md-10,\n  .col-md-11,\n  .col-md-12,\n  .col-md-2,\n  .col-md-3,\n  .col-md-4,\n  .col-md-5,\n  .col-md-6,\n  .col-md-7,\n  .col-md-8,\n  .col-md-9"
      +        },
      +        {
      +          "raws": {
      +            "before": "\n\n  ",
      +            "between": " ",
      +            "semicolon": true,
      +            "after": "\n  "
      +          },
      +          "type": "rule",
      +          "nodes": [
      +            {
      +              "raws": {
      +                "before": "\n    ",
      +                "between": ": "
      +              },
      +              "type": "decl",
      +              "source": {
      +                "input": {
      +                  "file": "grid.css"
      +                }
      +              },
                     "prop": "width",
                     "value": "8.33333%"
                   }
                 ],
                       "input": {
                         "file": "grid.css"
                       }
                     },
      +              "prop": "float",
      +              "value": "left"
      +            }
      +          ],
      +          "source": {
      +            "input": {
      +              "file": "grid.css"
      +            }
      +          },
      +          "selector": ".col-lg-1,\n  .col-lg-10,\n  .col-lg-11,\n  .col-lg-12,\n  .col-lg-2,\n  .col-lg-3,\n  .col-lg-4,\n  .col-lg-5,\n  .col-lg-6,\n  .col-lg-7,\n  .col-lg-8,\n  .col-lg-9"
      +        },
      +        {
      +          "raws": {
      +            "before": "\n\n  ",
      +            "between": " ",
      +            "semicolon": true,
      +            "after": "\n  "
      +          },
      +          "type": "rule",
      +          "nodes": [
      +            {
      +              "raws": {
      +                "before": "\n    ",
      +                "between": ": "
      +              },
      +              "type": "decl",
      +              "source": {
      +                "input": {
      +                  "file": "grid.css"
      +                }
      +              },
                     "prop": "width",
                     "value": "8.33333%"
                   }
                 ],
                       "input": {
                         "file": "grid.css"
                       }
                     },
      +              "prop": "float",
      +              "value": "left"
      +            }
      +          ],
      +          "source": {
      +            "input": {
      +              "file": "grid.css"
      +            }
      +          },
      +          "selector": ".col-xl-1,\n  .col-xl-10,\n  .col-xl-11,\n  .col-xl-12,\n  .col-xl-2,\n  .col-xl-3,\n  .col-xl-4,\n  .col-xl-5,\n  .col-xl-6,\n  .col-xl-7,\n  .col-xl-8,\n  .col-xl-9"
      +        },
      +        {
      +          "raws": {
      +            "before": "\n\n  ",
      +            "between": " ",
      +            "semicolon": true,
      +            "after": "\n  "
      +          },
      +          "type": "rule",
      +          "nodes": [
      +            {
      +              "raws": {
      +                "before": "\n    ",
      +                "between": ": "
      +              },
      +              "type": "decl",
      +              "source": {
      +                "input": {
      +                  "file": "grid.css"
      +                }
      +              },
                     "prop": "width",
                     "value": "8.33333%"
                   }
                 ],
      
      at Context.<anonymous> (test/components.js:23:30)

  5) Bootstrap v4 PostCSS component: input-group:

      + expected - actual

               "input": {
                 "file": "input-group.css"
               }
             },
      -      "selector": ".input-group-addon.form-control-sm"
      +      "selector": ".input-group-addon.form-control-sm,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .input-group-addon.btn"
           },
           {
             "raws": {
               "before": "\n\n",
               "input": {
                 "file": "input-group.css"
               }
             },
      -      "selector": ".input-group-addon.form-control-lg"
      +      "selector": ".input-group-addon.form-control-lg,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .input-group-addon.btn"
           },
           {
             "raws": {
               "before": "\n\n",
      
      at Context.<anonymous> (test/components.js:23:30)

  6) Bootstrap v4 PostCSS component: popover:

      + expected - actual

                     "file": "popover.css"
                   }
                 },
                 "prop": "border-bottom",
      -          "value": "1px solid #eaeaea"
      +          "value": "1px solid #ebebeb"
               },
               {
                 "raws": {
                   "before": "\n  ",
      
      at Context.<anonymous> (test/components.js:23:30)



