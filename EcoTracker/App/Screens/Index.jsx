import React from 'react';
import { Tab, TabView } from '@rneui/themed';

import { Title } from '../Components/texts';
import { SearchBar } from '../Components/search';
import Select from '../Components/select';
import {Colors, Spaces, fontSizes } from '../Constants/theme';
import style from '../styles';

const IndexScreen = () => {
  const [index, setIndex] = React.useState(0);

  return (
      
              <>

                <Title text="Select or search your Flood Station" />

                <Tab
                  value={index}
                  onChange={(e) => setIndex(e)}
                  indicatorStyle={{
                    backgroundColor: Colors.secondary,
                    height: Spaces.small / 4,
                  }}
                  variant="primary"
                  >
                    <Tab.Item
                      title="Select"
                      titleStyle={{ fontSize: fontSizes.medium }}
                      icon={{ name: 'place', color: 'white', size: fontSizes.large * 1.25  }}
                    />
                    <Tab.Item
                      title="Search"
                      titleStyle={{ fontSize: fontSizes.medium }}
                      icon={{ name: 'search', color: 'white' , size: fontSizes.large * 1.25 }}
                    />
                  </Tab>

            <TabView value={index} onChange={setIndex} animationType="spring">
              <TabView.Item style={ style.tabViewItem } >
                <Select />
              </TabView.Item>

              <TabView.Item style={ style.tabViewItem }>
                <SearchBar />
              </TabView.Item>
            </TabView>

            </>
    
  );
}

export default IndexScreen;
