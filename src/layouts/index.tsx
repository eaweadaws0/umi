import {IRouteComponentProps, history} from "umi";
import {ProLayout} from "@ant-design/pro-layout";
import './index.module.less'
import {useState} from "react";

export default function Layout({children, location, route, match}: IRouteComponentProps) {
  const [pathname, setPathname] = useState(location.pathname);
  return <ProLayout location={{pathname}}
                    menuDataRender={() => [
                      {
                        key: 'about',
                        name: '关于',
                        path: '/about',
                      },
                      {
                        key: 'order',
                        name: '订单管理',
                        path: '/home',
                        children: [
                          {
                            key: 'innerOrder',
                            name: '内部订单',
                            path: '/order/innerOrder',
                          },
                          {
                            key: 'clientOrder',
                            name: '客户订单',
                            path: '/order/clientOrder',
                          }
                        ]
                      }
                    ]}
                    menuItemRender={(item, dom) => (
                      <a
                        onClick={() => {
                          setPathname(item.path || '/')
                          history.push(item.path || '/')
                        }}
                      >
                        {dom}
                      </a>
                    )}
                    style={{height: '100vh'}}>
    {children}
  </ProLayout>
}
