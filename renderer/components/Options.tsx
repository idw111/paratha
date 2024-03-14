import { Button, Descriptions, Input, Select } from 'antd';
import { FC, useEffect } from 'react';
import { cn } from '../lib/cn';
import { useObjectState } from '../lib/hook';

export const Options: FC<{
  onChange?: (options: Record<string, any>) => void;
}> = ({ onChange }) => {
  const [options, setOptions, updateOptions] = useObjectState({ readOnly: true, name: '', version: '', runtime: '', packages: '' });
  useEffect(() => {
    onChange?.(options);
  }, [options]);
  return (
    <Descriptions title={null} colon={false} bordered={false} column={1} labelStyle={{ width: 120, height: '100%', lineHeight: '2.5rem' }}>
      <Descriptions.Item label="Runtime">
        <Select
          className="w-full text-black"
          placeholder="Select runtime"
          options={[
            {
              label: 'Node.js',
              options: [
                { label: 'Node.js 16.x', value: '16.x', runtime: 'nodejs' },
                { label: 'Node.js 18.x', value: '18.x', runtime: 'nodejs' },
                { label: 'Node.js 20.x', value: '20.x', runtime: 'nodejs' },
              ],
            },
            {
              label: 'python',
              options: [
                { label: 'Python 3.8', value: '3.8', runtime: 'python' },
                { label: 'Python 3.9', value: '3.9', runtime: 'python' },
                { label: 'Python 3.10', value: '3.10', runtime: 'python' },
                { label: 'Python 3.11', value: '3.11', runtime: 'python' },
                { label: 'Python 3.12', value: '3.12', runtime: 'python' },
              ],
            },
          ]}
          onChange={(_, option) => {
            const { value: version, runtime } = option as any;
            const layerName = options.readOnly ? `${runtime}${version}-${options.packages?.replace(/\s+/g, '-') || '???'}` : options.name;
            updateOptions({ runtime, version, name: layerName });
          }}
        />
      </Descriptions.Item>
      <Descriptions.Item label="Packages">
        <Input
          className="text-black"
          value={options.packages}
          onChange={(e) => {
            const packages = e.target.value;
            const layerName = options.readOnly ? `${options.runtime}${options.version}-${packages?.trim()?.replace(/\s+/g, '-') || '???'}` : options.name;
            updateOptions({ packages, name: layerName });
          }}
        />
      </Descriptions.Item>
      <Descriptions.Item label="Layer Name" className="relative">
        <Input className={cn('text-gray-400', { ['text-black']: !options.readOnly })} value={options.name} onChange={(e) => updateOptions({ name: e.target.value })} readOnly={options.readOnly} />
        {options.readOnly && (
          <div className="absolute right-0 top-0 flex h-10 items-center px-2">
            <Button size="small" type="primary" ghost onClick={() => updateOptions({ readOnly: false })}>
              Edit
            </Button>
          </div>
        )}
      </Descriptions.Item>
    </Descriptions>
  );
};
